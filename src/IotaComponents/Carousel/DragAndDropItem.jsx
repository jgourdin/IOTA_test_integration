import React from "react";
import PropTypes from "prop-types";
import ImageItem from "./ImageItem";
import { DropInfoTarget } from "../Molecules/DragDropSimple";
import Label from "../Atoms/LabelImage";

const DragAndDropItem = ({
  ckey,
  source,
  alt,
  id,
  selected,
  canDl,
  download,
  targetKeys,
  onDrop,
  targetDropped,
  label,
}) => {
  return (
    <div key={`DragAndDropItem_${ckey}`} className="carousel-item-container">
      <ImageItem
        ckey={`${ckey}_image`}
        source={source}
        alt={alt}
        selected={selected}
        download={download}
        canDl={canDl}
      />
      <div
        className="col-flex-centered"
        style={{ gap: "20px", marginTop: "10px" }}
      >
        {label ? <Label content={label} ckey={`Label_${ckey}`} /> : null}
        {targetKeys?.map((target, index) => (
          <DropInfoTarget
            ckey={`${ckey}_${index}`}
            key={`${ckey}_${index}`}
            targetKey={target.key}
            defaultvalue={
              targetDropped && targetDropped[target.key]
                ? targetDropped[target.key]
                : target.placeHolder
            }
            setValue={(e) => onDrop(e, target.key, id)}
          />
        ))}
      </div>
    </div>
  );
};

DragAndDropItem.propTypes = {
  ckey: PropTypes.string,
  arrayOfInput: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    })
  ),
  itemNb: PropTypes.number,
  setArrayOfInput: PropTypes.func,
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    })
  ),
  targetKeys: PropTypes.arrayOf(PropTypes.shape()), // Choice which input is activate ( title | author )
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

DragAndDropItem.defaultProps = {
  ckey: "DragAndDropItem",
  arrayOfInput: [
    {
      title: "no input",
      author: "no input",
    },
  ],
  itemNb: 3,
  setArrayOfInput: (el) => console.log("set Array of input not setup", el),
  itemArray: [
    {
      title: "no input",
      author: "no input",
    },
  ],
  targetKeys: [],
  label: null,
};

export default DragAndDropItem;
