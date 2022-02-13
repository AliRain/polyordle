import { Dispatch, SetStateAction } from 'react';

import { Status, WordSource } from 'types/enums';

export interface IAppContext {
  deemphasizeVowels: [boolean, Dispatch<SetStateAction<boolean>>];
  lightMode: [boolean, Dispatch<SetStateAction<boolean>>];
  numberOfGuesses: [number, Dispatch<SetStateAction<number>>];
  numberOfLettersPerGuess: [number, Dispatch<SetStateAction<number>>];
  wordSource: [WordSource, Dispatch<SetStateAction<WordSource>>];
}

export type ILetterFrequencies = Record<string, number>;

export interface IResult {
  letter: string;
  result: Status;
}
