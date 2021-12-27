import React from 'react';
import { PropTypes } from 'prop-types';

const LevelStars = ({ total, selected }) => {
  const stars = [];
  for (let i = 0; i < total; i += 1) {
    stars.push(
      <i
        key={i}
        className={`fa fa-star ${
          i <= selected ? 'star-checked' : 'star-not-checked'
        }`}
      />
    );
  }
  return (
    <div className="align-self-center level-stars" style={{ fontSize: `23px` }}>
      {stars}
    </div>
  );
};

LevelStars.propTypes = {
  total: PropTypes.number,
  selected: PropTypes.number,
};

LevelStars.defaultProps = {
  total: 3,
  selected: 1,
};

export default LevelStars;
