import React from 'react';
// Configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Styles
import {
  Biography,
  Content,
  ProfileImage,
  ProfileInfo,
  Wrapper
} from './ActorInfo.styles';
// Images
import NoImage from '../../images/no_image.jpg';

const ActorInfo = ({ actor }) => {
  const backdrop_path = actor.movies.sort(
    (a, b) => b.popularity - a.popularity
  )[0].backdrop_path;

  const gender = ['', 'female', 'male', 'transgender'];

  return (
    <Wrapper backdrop_path={backdrop_path}>
      <Content>
        <ProfileImage>
          <img
            src={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
            alt='profile-thumb'
          />
        </ProfileImage>
        <ProfileInfo>
          <div>
            <h1>{actor.name}</h1>
            <div className='profile-info-grid'>
              <span>Birth Day</span>
              {actor.birthday ? (
                <span>
                  <span className='material-icons'>event</span> {actor.birthday}
                </span>
              ) : (
                <span>Unknown</span>
              )}
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
              {actor.gender ? (
                <span className='material-icons'>{gender[actor.gender]}</span>
              ) : (
                <span>Unknown</span>
              )}
              <span>Place Of Birth</span>
              {actor.place_of_birth ? (
                <span>
                  <span className='material-icons'>location_on</span>{' '}
                  {actor.place_of_birth}
                </span>
              ) : (
                <span>Unknown</span>
              )}
            </div>
          </div>
        </ProfileInfo>
        <Biography>
          <h2>Biography</h2>
          {actor.biography ? (
            <p>{actor.biography}</p>
          ) : (
            <div className='biography-unknown'>{`Sorry! We don't have a biography for ${actor.name}`}</div>
          )}
        </Biography>
      </Content>
    </Wrapper>
  );
};

export default ActorInfo;
