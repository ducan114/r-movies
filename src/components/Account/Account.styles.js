import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const Avatar = styled.img`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Profile = styled.div`
  display: ${({ displayProfile }) => (displayProfile ? 'flex' : 'none')};
  position: absolute;
  right: 0;
  top: calc(100% + 5px);
  z-index: 100;
  white-space: nowrap;
  background: white;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 5px;

  ::before {
    position: absolute;
    top: -5px;
    right: 15px;
    content: '';
    width: 0;
    height: 0;
    border-bottom: 5px solid white;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  .username {
    font-family: sans-serif;
    font-weight: bolder;
  }
`;

export const ProfileDivider = styled.div`
  height: 0;
  width: 100%;
  border-top: 1px solid #dadce0;
`;

export const SignOutButton = styled.button`
  width: 100%;
  border: 1px solid #dadce0;
  background-color: #ffffff;
  font-size: var(--fontSmall);
  padding: 5px 10px;
  cursor: pointer;

  :hover {
    background-color: #f7f8f8;
  }

  :active {
    border-color: transparent;
    background-color: #e8e8e9;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
  }
`;
