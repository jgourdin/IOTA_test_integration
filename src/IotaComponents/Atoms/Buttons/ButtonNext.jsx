import React from 'react';
import { PropTypes } from 'prop-types';

const ButtonNext = ({ onValidate, text, disabled, timeout }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`button-modal button-next ${disabled ? 'black-and-white half-visible' : ''
      }`}
      onClick={(rep) => {
        return onValidate(rep);
      }}
    >
      <span className="arrow-next is-bold is-size-5">
        {text}{' '}
        <i className="m-0 ml-3 my-auto fa fa-angle-right" aria-hidden="true" />
      </span>
    </button>
  );
};

ButtonNext.propTypes = {
  onValidate: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  timeout: PropTypes.number,
};

ButtonNext.defaultProps = {
  onValidate: () => console.error('Try to Toggle'),
  text: 'Suivant',
  disabled: false,
  timeout: 1000,
};

export default ButtonNext;
