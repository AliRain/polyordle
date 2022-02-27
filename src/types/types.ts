import { Dispatch, SetStateAction } from 'react';

import { Status, WordSource } from 'types/enums';

export interface IAppContext {
  deemphasizeVowels: [boolean, Dispatch<SetStateAction<boolean>>];
  lightMode: [boolean, Dispatch<SetStateAction<boolean>>];
  wordSource: [WordSource, Dispatch<SetStateAction<WordSource>>];
  results: [IResult[][], Dispatch<SetStateAction<IResult[][]>>];
}

export type ILetterFrequencies = Record<string, number>;

export interface IResult {
  letter: string;
  result: Status[];
}

export interface IWordSourceSettings {
  numberOfLetters: number;
  numberOfGuesses: number;
  numberOfWords: number;
}
