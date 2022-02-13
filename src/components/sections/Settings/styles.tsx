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
