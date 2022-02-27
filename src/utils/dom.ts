import { WordSource } from 'types/enums';

export const isLightMode = (): boolean => localStorage.getItem('light-mode') === 'true';
export const setLightMode = (v: boolean): void => localStorage.setItem('light-mode', v.toString());

export const isDeemphasizeVowels = (): boolean => localStorage.getItem('deemphasize-vowels') === 'true';
export const setDeemphasizeVowels = (v: boolean): void => localStorage.setItem('deemphasize-vowels', v.toString());

export const getWordSource = (): WordSource => {
  const storedValue = localStorage.getItem('word-source');
  if (storedValue) return WordSource[storedValue as keyof typeof WordSource];
  return WordSource.Wordle;
};
export const setWordSource = (v: WordSource): void => localStorage.setItem('word-source', v.toString());
