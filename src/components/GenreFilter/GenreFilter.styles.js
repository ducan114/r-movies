import styled from 'styled-components';

export const GenreSelector = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  border-radius: 20px;
  background-color: var(--lightGrey);
  padding: 10px 20px;
  color: black;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  .genre-selector-header {
    display: flex;
    align-items: center;

    .genre-selector-title {
      flex: 1;
      font-size: var(--fontBig);
      font-weight: bold;
    }
  }

  .genre-selector-main {
    max-height: calc(100vh - 195px - 1rem);
    overflow: auto;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.25rem;
    align-content: flex-start;
    font-size: var(--fontMed);

    label {
      margin-left: 0.5rem;
    }
  }
`;
