import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0px 0px;
  }

  p {
    padding: 5px 0;
    margin: 0.25rem 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;

  :hover {
    filter: brightness(80%);
  }
`;
