import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 10px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  color: var(--white);
  display: flex;
  column-gap: 0.25rem;

  .material-icons {
    user-select: none;
    font-size: 2rem;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .material-icons:hover {
    cursor: pointer;
  }
`;

export const SearchBox = styled.div`
  flex: 1 1 0px;
  min-width: 230px;
  display: flex;
  align-items: center;
  background: var(--medGrey);
  border-radius: 40px;

  input {
    flex: 1 1 0px;
    min-width: 120px;
    background: transparent;
    font-size: var(--fontMed);
    border: none;
    outline: none;
    color: var(--white);
  }
`;
