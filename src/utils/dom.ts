export const isLightMode = (): boolean => localStorage.getItem('light-mode') === 'true';
export const setLightMode = (v: boolean): void => localStorage.setItem('light-mode', v.toString());

export const isDeemphasizeVowels = (): boolean => localStorage.getItem('deemphasize-vowels') === 'true';
export const setDeemphasizeVowels = (v: boolean): void => localStorage.setItem('deemphasize-vowels', v.toString());
