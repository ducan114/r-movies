import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  display: flex;
  align-items: center;
  height: 80px;
  --content-height: 55px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  height: var(--content-height);
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  display: flex;
  align-items: center;

  input {
    flex: 1 1 0px;
    min-width: 120px;
    background: transparent;
    font-size: var(--fontMed);
    border: none;
    outline: none;
    color: var(--white);
  }

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
