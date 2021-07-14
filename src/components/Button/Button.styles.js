import styled from 'styled-components';

export const Wrapper = styled.button`
  background: var(--darkGrey);
  display: block;
  margin: 20px auto;
  width: 25%;
  height: 60px;
  min-width: 200px;
  border-radius: 30px;
  color: var(--white);
  border: none;
  font-size: var(--fontBig);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
