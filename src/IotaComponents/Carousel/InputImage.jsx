import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';
import InputTextWithBorders from '../Atoms/InputTextWithBorders';

const InputImage = ({
  ckey,
  /** image */
  source,
  alt,
  selected,
  download,
  canDl,
  /** input */
  onChange,
  inputs
}) => {

  return (
    <div key={`InputImage_${ckey}`} className="col-flex-between"
      style={{ height: '100%' }}
    >
      <ImageItem
        source={source}
        alt={alt}
        selected={selected}
        download={download}
        canDl={canDl}
      />
      <div className="my-3">
        {inputs?.map((input, index) => <InputTextWithBorders
          key={`InputImagecall_${ckey}_${input.key}_${index}`}
          ckey={`InputImage_${ckey}_${input.key}_${index}`}
          value={input.value}
          name={input.key}
          placeholder={input.placeholder}
          onChange={(value) => onChange(value)}
        />
        )}
      </div>
    </div>
  );
};

InputImage.propTypes = {
  ckey: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

InputImage.defaultProps = {
  ckey: 'InputImage',
  source: '',
  alt: '',
  selected: false,
  onSelect: () => { console.log("Try to select") }
};

export default InputImage;
