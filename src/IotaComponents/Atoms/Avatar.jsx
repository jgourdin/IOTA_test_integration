import React from 'react';
import { PropTypes } from 'prop-types';
import Soki from '../assets/head.png';

const Avatar = ({ avatar, size }) => {
  const proportions = ['35px', '65px', '110px', '150px', '400px'];
  return (
    <img
      src={avatar}
      alt="Soki"
      className=""
      width={proportions[size]}
      height={proportions[size]}
    />
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  avatar: Soki,
  size: 1,
};

export default Avatar;
