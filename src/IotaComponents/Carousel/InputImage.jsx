import React from "react";
import PropTypes from "prop-types";
import ImageItem from "./ImageItem";
import InputTextWithBorders from "../Atoms/InputTextWithBorders";

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
  inputs,
}) => {


  return (
    <div
      key={`InputImage_${ckey}`}
      style={{
        height: "100%",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <ImageItem
        source={source}
        alt={alt}
        selected={selected}
        download={download}
        canDl={canDl}
      />
      <div className="my-3">
        {inputs?.map((input, index) => (
          <InputTextWithBorders
            key={`InputImagecall_${ckey}_${input.key}_${index}`}
            ckey={`InputImage_${ckey}_${input.key}_${index}`}
            value={input.value}
            name={input.key}
            placeholder={input.placeHolder}
            onChange={(value) => onChange(value)}
          />
        ))}
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
  ckey: "InputImage",
  source: "",
  alt: "",
  selected: false,
  onSelect: () => {
    console.log("Try to select");
  },
};

export default InputImage;
