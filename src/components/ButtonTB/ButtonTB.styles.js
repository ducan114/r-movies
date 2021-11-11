import styled from 'styled-components';

export const Wrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 3px solid ${({ color }) => color};
  color: ${({ color }) => color};
  border-radius: 10px;
  transition: all 300ms;
  padding: 5px 10px;
  font-size: var(--fontMed);
  font-weight: bold;
  white-space: nowrap;

  :hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ color }) => color};
  }

  :active {
    transform: scale(0.98);
  }
`;
