import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  display: flex;
  padding: 0 20px;

  span {
    padding-right: 10px;
    font-size: var(--fontMed);
    color: var(--white);

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }

  a {
    text-decoration: none;

    span:hover {
      color: teal;
    }
  }
`;
