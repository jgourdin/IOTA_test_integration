import React from "react";
import PropTypes from "prop-types";
import ButtonDownload from "../Atoms/Buttons/ButtonDownload";

const ImageItem = ({ ckey, source, alt, selected, download, onDownload }) => {
  return (
    <div className="col-flex-start">
      <img
        key={`ImageItem_${ckey}`}
        src={source}
        alt={alt}
        className="carousel-image"
        style={
          selected
            ? {
                border: "6px solid #555",
                borderColor: "#16cfac",
                borderRadius: "10px",
              }
            : null
        }
      />
      {download ? (
        <div className="row-flex-centered mt-4" style={{ width: "100%" }}>
          <ButtonDownload data={source} onValidate={onDownload} />
        </div>
      ) : (
        <div className="col-flex-centered" />
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
  ckey: "ImageItem",
  source: "",
  alt: "",
  selected: false,
};

export default ImageItem;
