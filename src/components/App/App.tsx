import { useEffect, useState } from 'react';

import './styles.css';

import Header from 'components/sections/Header';
import Settings from 'components/sections/Settings';
import Polyordle from 'components/sections/Polyordle';
import { AppContext } from 'contexts/app';
import { WordSource } from 'types/enums';
import { IResult } from 'types/types';
import { isDeemphasizeVowels, isLightMode, setLightMode } from 'utils/dom';

const App: React.VFC = () => {
  const deemphasizeVowels = useState(isDeemphasizeVowels());
  const lightMode = useState(isLightMode());
  const wordSource = useState(WordSource.Wordle);
  const guesses = useState([] as IResult[][]);

  useEffect(() => {
    setLightMode(lightMode[0]);
    document.body.className = lightMode[0] ? 'light-mode' : '';
  }, [lightMode]);

  return (
    <AppContext.Provider value={{ deemphasizeVowels, lightMode, wordSource, guesses }}>
      <Header />
      <Settings />
      <Polyordle />
    </AppContext.Provider>
  );
};

export default App;
