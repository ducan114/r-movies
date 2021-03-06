import React, { useState } from 'react';
import {
  Avatar,
  Profile,
  ProfileDivider,
  SignOutButton,
  Wrapper
} from './Account.styles';
// Auth
import { useAuth } from '../../contexts/AuthContext';
// Components
import ButtonTB from '../ButtonTB';

const Account = () => {
  const { currentUser, logOut, logIn } = useAuth();
  const [displayProfile, setDisplayProfile] = useState(false);

  return (
    <>
      {!currentUser && (
        <ButtonTB
          callback={() => logIn().catch(console.log)}
          text={'Sign In'}
          color={'white'}
          hoverColor={'black'}
        />
      )}
      {currentUser && (
        <Wrapper>
          <Avatar
            src={currentUser.photoURL}
            alt='avatar'
            onClick={() => setDisplayProfile(prev => !prev)}
          />
          {displayProfile && (
            <Profile>
              <div>
                Signed in as{' '}
                <span className='profile-username'>
                  {currentUser.displayName}
                </span>
              </div>
              <ProfileDivider />
              <SignOutButton
                onClick={() =>
                  logOut()
                    .then(() => setDisplayProfile(false))
                    .catch(console.log)
                }
              >
                Sign Out
              </SignOutButton>
            </Profile>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Account;
