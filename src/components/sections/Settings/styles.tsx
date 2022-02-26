import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--background);
  padding: 2px 5px;
  border-radius: 3px;
  position: relative;
  top: -1px;
`;
