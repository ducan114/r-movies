import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Image } from './ActorThumb.styles';

const ActorThumb = ({ actorId, name, character, image }) => (
  <Wrapper>
    <Link to={`/actors/${actorId}`}>
      <Image src={image} alt='actor-thumb' />
    </Link>

    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default ActorThumb;
