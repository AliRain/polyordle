import styled from 'styled-components';

export const Letter = styled.button`
  outline: none;
  border: 2px solid var(--primary);
  width: 30px;
  height: 30px;
`;

export const Guess = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
`;

export const Word = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WordsWrapper = styled.div`
  max-width: 380px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
