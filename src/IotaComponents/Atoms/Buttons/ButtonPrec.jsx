import React from 'react';
import { PropTypes } from 'prop-types';

const ButtonPrec = ({ onValidate, text, disabled, timeout }) => {
  return (
    <button
      type="button"
      className="button-modal button-prec"
      disabled={disabled}
      onClick={(rep) => {
        return onValidate(rep);
      }}
    >
      <span className="arrow-prec">
        <i className="m-0 mr-4 my-auto fa fa-angle-left" aria-hidden="true" />
        {text}
      </span>
    </button>
  );
};

ButtonPrec.propTypes = {
  onValidate: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  timeout: PropTypes.number,
};

ButtonPrec.defaultProps = {
  onValidate: () => console.error('Try to Toggle'),
  text: 'Précédent',
  disabled: false,
  timeout: 1000,
};

export default ButtonPrec;
