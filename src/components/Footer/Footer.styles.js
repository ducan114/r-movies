import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InspiredBy = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  h1 {
    margin: 0;
  }

  img {
    width: 60px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.2rem;

    h1 {
      font-size: var(--fontMed);
    }

    img {
      width: 40px;
    }
  }
`;
export const PoweredBy = styled.div`
  img {
    display: block;
    width: 150px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 120px;
    }
  }
`;
