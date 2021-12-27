import React from 'react';
import { PropTypes } from 'prop-types';
import '../activity-views.css';
import LevelStars from '../Atoms/LevelStars';
import saturne from '../assets/Background/illustration_starnav.png';

/**
 * Component Statique Activity Header
 * Configurable a partir du fichier header-config.js
 */
const ActivityHeader = ({
  level,
  title,
  instruction,
  image,
}) => {
  return (
      <div className="level-header">
        <div className="level-header-top">
          <div className="mx-auto my-2">
            <img
              style={{ width: '90px', height: '85px' }}
              src={image}
              alt="Illustration de l'activité"
            />
          </div>
          <div className="my-2">
            <LevelStars total={3} selected={level} />
          </div>
        </div>
        <span className="is-size-3 text-basic is-bold text-center">
          {title}
        </span>
        <p className="text-center text-basic is-size-6">{instruction}</p>
      </div>
  );
};

ActivityHeader.propTypes = {
  level: PropTypes.number,
  title: PropTypes.string,
  instruction: PropTypes.string,
  image: PropTypes.string,
  correction: PropTypes.bool,
  exchange: PropTypes.node,
};

ActivityHeader.defaultProps = {
  level: 1,
  title: 'Exemple de titre',
  instruction: "Exemple d'instruction",
  image: saturne,
  correction: false,
  exchange: <div />,
};

export default ActivityHeader;
