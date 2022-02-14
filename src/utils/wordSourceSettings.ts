import { WordSource } from 'types/enums';
import { IWordSourceSettings } from 'types/types';

const wordSourceSettings: Record<WordSource, IWordSourceSettings> = {
  [WordSource.Wordle]: {
    numberOfLetters: 5,
    numberOfGuesses: 6,
    numberOfWords: 1,
  },
  [WordSource.Dordle]: {
    numberOfLetters: 5,
    numberOfGuesses: 7,
    numberOfWords: 2,
  },
  [WordSource.Quordle]: {
    numberOfLetters: 5,
    numberOfGuesses: 9,
    numberOfWords: 4,
  },
};

export const getWordSourceSettings = (wordSource: WordSource): IWordSourceSettings => wordSourceSettings[wordSource];
