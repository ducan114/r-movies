import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animatedThumb 0.5s;

  :hover {
    filter: brightness(80%);
  }

  @keyframes animatedThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
