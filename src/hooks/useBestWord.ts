import { useAppContext } from 'contexts/app';
import { useMemo } from 'react';
import { Status } from 'types/enums';

import { ILetterFrequencies, IResult } from 'types/types';

function getLetterFrequencies(words: string[], deemphasizeVowels: boolean): ILetterFrequencies {
  const letters: Record<string, number> = {};

  words.forEach(word => {
    word.split('').forEach(letter => {
      if (Object.keys(letters).includes(letter)) letters[letter]++;
      else letters[letter] = 1;
    });
  });

  if (deemphasizeVowels) {
    letters.a /= 2;
    letters.e /= 2;
    letters.i /= 2;
    letters.o /= 2;
    letters.u /= 2;
  }

  return letters;
}

function getWordScore(letterFrequencies: ILetterFrequencies, word: string): number {
  let score = 0;
  const letters = word.split('').filter((value, index, self) => self.indexOf(value) === index);
  letters.forEach(letter => {
    score += letterFrequencies[letter] ?? 0;
  });

  return score;
}

function sortWordsByScore(words: string[], deemphasizeVowels: boolean): string[] {
  const letterFrequencies = getLetterFrequencies(words, deemphasizeVowels);
  return words.sort((a, b) => getWordScore(letterFrequencies, b) - getWordScore(letterFrequencies, a));
}

// TODO: write tests!
function getBestPolyordleToGuess(guesses: IResult[][], wordLength: number): number {
  if (guesses.length === 0) return 0;

  const scores = {} as Record<string, number>;
  const correctScore = 2;
  const presentScore = 1;

  guesses.forEach((guess, guessIndex) => {
    guess.forEach(({ results }) => {
      results.forEach(result => {
        let scoreToAdd = 0;

        if (result === Status.Correct) scoreToAdd = correctScore;
        else if (result === Status.Present) scoreToAdd = presentScore;

        if (scores[guessIndex] === undefined) scores[guessIndex] = scoreToAdd;
        scores[guessIndex] += scoreToAdd;
      });
    });
  });

  const scoreKeys = Object.keys(scores);
  scoreKeys.forEach(key => {
    if (scores[key] === wordLength * 2) delete scores[key];
  });

  const bestGuess = scoreKeys.reduce((a, b) => (scores[a] > scores[b] ? a : b));
  return parseInt(bestGuess || '0', 10);
}

function getBestWord(sortedWords: string[], guesses: IResult[][]): string | undefined {
  const bestPolyordleToGuess = getBestPolyordleToGuess(guesses, sortedWords[0].length);

  return sortedWords.find(word => {
    for (let guessIndex = 0; guessIndex < guesses.length; guessIndex++) {
      const guess = guesses[guessIndex];

      for (let letterIndex = 0; letterIndex < guess.length; letterIndex++) {
        const { letter, results } = guess[letterIndex];

        if (results[bestPolyordleToGuess] === Status.Absent && word.includes(letter)) return false;
        if (results[bestPolyordleToGuess] === Status.Present) {
          if (!word.includes(letter)) return false;
          if (word.split('')[letterIndex] === letter) return false;
        }
        if (results[bestPolyordleToGuess] === Status.Correct && word.split('')[letterIndex] !== letter) return false;
      }
    }

    return true;
  });
}

function useBestWord(words: string[], guesses: IResult[][]): string | undefined {
  const [deemphasizeVowels] = useAppContext().deemphasizeVowels;
  const sortedWords = useMemo(() => sortWordsByScore(words, deemphasizeVowels), [words, deemphasizeVowels]);
  return useMemo(() => getBestWord(sortedWords, guesses), [sortedWords, guesses]);
}

export default useBestWord;
