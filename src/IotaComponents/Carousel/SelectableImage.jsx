import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';
import SelectableItem from './SelectableItem';

const SelectableImage = ({
  ckey,
  onSelect,
  source,
  alt,
  selected,
  canDl,
  download
}) => {
  return (
    <SelectableItem
      ckey={ckey}
      setSelected={(rep) => onSelect(rep)}
    >
      <ImageItem
        source={source}
        alt={alt}
        selected={selected}
        canDl={canDl}
        download={download}
      />
    </SelectableItem>
  );
};

SelectableImage.propTypes = {
  ckey: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

SelectableImage.defaultProps = {
  ckey: 'SelectableImage',
  source: '',
  alt: '',
  selected: false,
  onSelect: () => { console.log("Try to select") }
};

export default SelectableImage;
