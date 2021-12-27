import React from 'react';
import { PropTypes } from 'prop-types';
import Fleche from '../../assets/Buttons/arrow_blue.png';

const ButtonArrow = ({ sens, onValidate }) => {
  const defs = {
    left: {
      sens: 'left',
      css: 'rotate(0deg)',
    },
    up: {
      sens: 'up',
      css: 'rotate(90deg)',
    },
    right: {
      sens: 'right',
      css: 'rotate(180deg)',
    },
    down: {
      sens: 'down',
      css: 'rotate(240deg)',
    },
  };
  
  return (
    <button type="button" className="no-button" onClick={() => onValidate()}>
      <img
        alt={`fleche ${defs[sens].sens}`}
        src={Fleche}
        style={{ transform: `${defs[sens].css}` }}
      />
    </button>
  );
};

ButtonArrow.propTypes = {
  sens: PropTypes.string,
  onValidate: PropTypes.func,
};

ButtonArrow.defaultProps = {
  sens: 'left',
  onValidate: () => console.error('Try to say NOP'),
};

export default ButtonArrow;
