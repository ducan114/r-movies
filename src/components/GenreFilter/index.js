import React, { useState } from 'react';
// Components
import Button from '../Button';
// Styles
import { GenreSelector } from './GenreFilter.styles';

const GenreFilter = ({ genres, setGenres, availableGenres }) => {
  const [showGenreSelector, setShowGenreSelector] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState({ ...genres });

  return (
    <div>
      <span
        className='material-icons'
        onClick={() => setShowGenreSelector(true)}
      >
        filter_alt
      </span>
      {showGenreSelector && (
        <GenreSelector>
          <div className='genre-selector-header'>
            <div className='genre-selector-title'>Filter by genres</div>
            <span
              className='material-icons'
              onClick={() => {
                setShowGenreSelector(false);
                setSelectedGenres({ ...genres });
              }}
            >
              close
            </span>
          </div>
          <div className='genre-selector-main'>
            {availableGenres.map(genre => (
              <div key={genre._id}>
                <input
                  type='checkbox'
                  id={`genre-${genre._id}`}
                  checked={!!selectedGenres[genre._id]}
                  onChange={() => {
                    const { [genre._id]: thisGenre, ...rest } = selectedGenres;
                    thisGenre
                      ? setSelectedGenres({
                          ...rest
                        })
                      : setSelectedGenres({ ...rest, [genre._id]: true });
                  }}
                />
                <label htmlFor={`genre-${genre._id}`}>{genre.name}</label>
              </div>
            ))}
          </div>
          <div className='genre-selector-footer'>
            <Button
              text='Done'
              callback={() => {
                setGenres({ ...selectedGenres });
                setShowGenreSelector(false);
              }}
            />
          </div>
        </GenreSelector>
      )}
    </div>
  );
};

export default GenreFilter;
