import { useAppContext } from 'contexts/app';
import { getWordSourceSettings } from 'utils/wordSourceSettings';
import { Guess, Letter, Word, WordsWrapper, Wrapper } from './styles';

const Wordle: React.VFC = () => {
  const {
    wordSource: [wordSource],
    results: [results, setresults],
  } = useAppContext();

  const { numberOfGuesses, numberOfLetters, numberOfWords } = getWordSourceSettings(wordSource);

  return (
    <Wrapper>
      <WordsWrapper>
        {/* each word that needs to be guessed */}
        {new Array(numberOfWords).fill(0).map((_, i) => (
          <Word key={i}>
            {/* each guess for that word */}
            {new Array(numberOfGuesses).fill(0).map((_, j) => (
              <Guess key={j}>
                {/* each letter in that guess */}
                {new Array(numberOfLetters).fill(0).map((_, k) => (
                  <Letter key={k}>{results[i]?.[j]?.result[k]}</Letter>
                ))}
              </Guess>
            ))}
          </Word>
        ))}
      </WordsWrapper>
    </Wrapper>
  );
};

export default Wordle;
