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

function getBestWord(sortedWords: string[], guesses: IResult[][]): string | undefined {
  return sortedWords.find(word => {
    for (let guessIndex = 0; guessIndex < guesses.length; guessIndex++) {
      const guess = guesses[guessIndex];

      for (let letterIndex = 0; letterIndex < guess.length; letterIndex++) {
        const { letter, result } = guess[letterIndex];

        if (result === Status.Absent && word.includes(letter)) return false;
        if (result === Status.Present) {
          if (!word.includes(letter)) return false;
          if (word.split('')[letterIndex] === letter) return false;
        }
        if (result === Status.Correct && word.split('')[letterIndex] !== letter) return false;
      }
    }

    return true;
  });
}

function useBestWords(words: string[], guesses: IResult[][]): string | undefined {
  const [deemphasizeVowels] = useAppContext().deemphasizeVowels;
  const sortedWords = useMemo(() => sortWordsByScore(words, deemphasizeVowels), [words, deemphasizeVowels]);
  return useMemo(() => getBestWord(sortedWords, guesses), [sortedWords, guesses]);
}

export default useBestWords;
