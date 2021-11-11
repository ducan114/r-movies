import styled from 'styled-components';
// Configs
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.section`
  padding: 40px 20px;
  background-blend-mode: multiply;
  ${({ backdrop_path }) =>
    backdrop_path &&
    `background-image: url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path});`}
  background-color: rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  max-width: var(--maxWidth);
  padding: 15px;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentDivider = styled.div`
  border-top: 2px dashed white;
`;

export const FlexContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ProfileImage = styled.div`
  flex: 1 1 0px;

  > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 15px;
    transition: all 0.3s;
    animation: animatedThumb 0.5s;

    @keyframes animatedThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const ProfileInfo = styled.div`
  flex: 4 1 0px;

  > div {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    h1 {
      margin-top: 0;
      margin-bottom: 0.75rem;
    }

    span:not(.material-icons) {
      font-size: 1.25rem;
    }
  }

  .profile-info-grid {
    flex: 1 0 0px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    align-content: center;
    gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    > div {
      padding: 10px;

      span:not(.material-icons) {
        font-size: 1.1rem;
      }
    }
  }
`;

export const Biography = styled.div`
  padding: 0 10px;

  h2 {
    font-size: 1.75rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.1rem;
    }
  }
`;
