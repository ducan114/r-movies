import styled from 'styled-components';
// Configs
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.section`
  ${({ backdrop }) =>
    backdrop &&
    `background-image: url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop});`}
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animatedMovieInfo 1s;

  @keyframes animatedMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: var(--maxWidth);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  margin: 0 auto;

  .thumb-container {
    flex: 3 1 0px;
  }

  .text-container {
    flex: 7 1 0px;
  }

  @media screen and (max-width: 968px) {
    .thumb-container {
      flex: 2 1 0px;
    }

    .text-container {
      flex: 3 1 0px;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Text = styled.div`
  color: var(--white);
  width: 100%;
  padding: 20px 40px;
  overflow: hidden;

  .movie-info-row-flex {
    display: flex;
    justify-content: flex-start;
    column-gap: 4rem;
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    color: black;
    width: 35px;
    height: 35px;
    font-weight: 800;
    border-radius: 50%;
  }

  .overview {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 768px) {
    .overview {
      font-size: 1rem;
    }
  }
`;
