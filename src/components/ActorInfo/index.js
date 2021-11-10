import React from 'react';
// Configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Styles
import {
  Biography,
  Content,
  ContentDivider,
  FlexContainer,
  ProfileImage,
  ProfileInfo,
  Wrapper
} from './ActorInfo.styles';

const ActorInfo = ({ actor }) => {
  const backdrop_path = actor.movies.sort(
    (a, b) => b.popularity - a.popularity
  )[0].backdrop_path;

  return (
    <Wrapper backdrop_path={backdrop_path}>
      <Content>
        <FlexContainer>
          <ProfileImage>
            <img
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`}
              alt='profile-thumb'
            />
          </ProfileImage>
          <ProfileInfo>
            <div>
              <h1>{actor.name}</h1>
              <div className='profile-info-grid'>
                <span>Birth Day</span>
                <span>
                  <span className='material-icons'>event</span> {actor.birthday}
                </span>
                {actor.deathday && (
                  <>
                    <span>Death Day</span>
                    <span>
                      <span className='material-icons'>event</span>{' '}
                      {actor.deathday}
                    </span>
                  </>
                )}
                <span>Gender</span>
                <span className='material-icons'>
                  {actor.gender === 'other' ? 'transgender' : actor.gender}
                </span>
                <span>Place Of Birth</span>
                <span>
                  <span className='material-icons'>location_on</span>{' '}
                  {actor.place_of_birth}
                </span>
              </div>
            </div>
          </ProfileInfo>
        </FlexContainer>
        <ContentDivider />
        <Biography>
          <h2>Biography</h2>
          <p>{actor.biography}</p>
        </Biography>
      </Content>
    </Wrapper>
  );
};

export default ActorInfo;
