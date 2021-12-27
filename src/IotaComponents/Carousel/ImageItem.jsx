import React from 'react';
import PropTypes from 'prop-types';
import ButtonDownload from '../Atoms/Buttons/ButtonDownload';

const ImageItem = ({
  ckey,
  source,
  alt,
  selected,
  download,
  onDownload
}) => {
  return (
    <div className="col-flex-start"
      style={{ height: '100%' }}
    >
      <img
        key={`ImageItem_${ckey}`}
        style={{ minHeight: '400px' }}
        src={source}
        alt={alt}
        className="carousel-image"
        style={selected ? ({ border: '6px solid #555', borderColor: '#16cfac', borderRadius: '10px' }) : null}
      />
      {download ? (
        <div
          className="row-flex-centered mt-4"
          style={{ width: '100%' }}
        >
          <ButtonDownload data={source} onValidate={onDownload} />
        </div>
      ) : (
        <div
          className="col-flex-centered"
          style={{ width: '100%', height: '70px' }}
        />
      )}
    </div>
  );
};

ImageItem.propTypes = {
  ckey: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  selected: PropTypes.bool,
};

ImageItem.defaultProps = {
  ckey: 'ImageItem',
  source: '',
  alt: '',
  selected: false,
};

export default ImageItem;
