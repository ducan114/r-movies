import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  display: flex;
  align-items: center;
  height: 100px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 30px;
  }

  input {
    position: absolute;
    left: 0;
    width: 95%;
    margin: 8px 0;
    height: 40px;
    padding-left: 60px;
    background: transparent;
    font-size: var(--fontBig);
    border: none;
    outline: none;
    color: var(--white);
  }

  .fa.fa-times {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 2rem;
  }
`;
