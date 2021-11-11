import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const InspiredBy = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    white-space: nowrap;
  }

  img {
    width: 50px;
    vertical-align: middle;
  }

  @media screen and (max-width: 768px) {
    row-gap: 0.2rem;

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
    width: 130px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100px;
    }
  }
`;
