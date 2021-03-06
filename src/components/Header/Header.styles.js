import styled from 'styled-components';

export const Wrapper = styled.header`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const RMDBLogo = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
