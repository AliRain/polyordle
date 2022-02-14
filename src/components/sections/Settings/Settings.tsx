import { useAppContext } from 'contexts/app';
import { WordSource } from 'types/enums';
import Dropdown from 'components/shared/Dropdown';
import { Wrapper } from './styles';
import Checkbox from 'components/shared/Checkbox';

const wordSources = [] as { value: string; label: string }[];
const keys = Object.keys(WordSource);
const values = Object.values(WordSource);
for (let index = 0; index < keys.length; index++) {
  if (isNaN(keys[index] as unknown as number)) continue;

  wordSources.push({ value: keys[index], label: values[index] as string });
}

const Settings: React.VFC = () => {
  const { deemphasizeVowels, lightMode, wordSource } = useAppContext();

  return (
    <Wrapper>
      <span>
        <Dropdown
          label="Word source: "
          value={wordSource[0]}
          onChange={v => wordSource[1](v as unknown as WordSource)}
          options={wordSources}
        />
      </span>
      <span>
        <Checkbox label="Deemphasize vowels: " checked={deemphasizeVowels[0]} onChange={deemphasizeVowels[1]} />
      </span>
      <span>
        <Checkbox label="Light mode: " checked={lightMode[0]} onChange={lightMode[1]} />
      </span>
    </Wrapper>
  );
};

export default Settings;
