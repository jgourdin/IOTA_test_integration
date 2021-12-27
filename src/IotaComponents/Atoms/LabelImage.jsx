import React from "react";
import PropTypes from "prop-types";

const LabelImage = ({ ckey, content }) => {
  return (
    <div className="basic-container" key={ckey}>
      <span className="is-size-5">{content}</span>
    </div>
  );
};

LabelImage.propTypes = {
  ckey: PropTypes.string,
  content: PropTypes.string,
};

LabelImage.defaultProps = {
  ckey: "InputTextWithBorder",
  content: "",
};

export default LabelImage;
