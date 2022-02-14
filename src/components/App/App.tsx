import { useEffect, useState } from 'react';

import './styles.css';

import { AppContext } from 'contexts/app';
import { WordSource } from 'types/enums';
import Header from 'components/sections/Header';
import Settings from 'components/sections/Settings';
import { isDeemphasizeVowels, isLightMode, setLightMode } from 'utils/dom';

const App: React.VFC = () => {
  const deemphasizeVowels = useState(isDeemphasizeVowels());
  const lightMode = useState(isLightMode());
  const wordSource = useState(WordSource.Wordle);

  useEffect(() => {
    setLightMode(lightMode[0]);
    document.body.className = lightMode[0] ? 'light-mode' : '';
  }, [lightMode]);

  return (
    <AppContext.Provider value={{ deemphasizeVowels, lightMode, wordSource }}>
      <Header />
      <Settings />
    </AppContext.Provider>
  );
};

export default App;
