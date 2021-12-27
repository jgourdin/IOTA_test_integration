import React from 'react';
import { PropTypes } from 'prop-types';

const ButtonDownload = ({ onValidate, text, data, nameImage }) => {
  return (
    <button
      type="button"
      className="button-download"
      onClick={() => onValidate()}
    >
      <a href={data} download={nameImage}>
        <span className="is-bold is-size-6">{text}</span>
      </a>
    </button>
  );
};

ButtonDownload.propTypes = {
  onValidate: PropTypes.func,
  text: PropTypes.string,
  nameImage: PropTypes.string,
  data: PropTypes.string,
};

ButtonDownload.defaultProps = {
  onValidate: () => console.error('Try to Download'),
  text: 'Télécharger',
  nameImage: 'iota-image',
  data: '',
};

export default ButtonDownload;
