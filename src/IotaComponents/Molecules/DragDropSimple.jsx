import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Label from "../Atoms/LabelImage";

const DragableDatas = ({ targetKey, datas }) => {
  return (
    <>
      {datas.map((elem, index) => {
        return (
          <DragDropContainer
            key={`DragableDatas${index}`}
            targetKey={targetKey}
            dragData={{
              elem,
              indexInfo: index,
            }}
          >
            <div className="drag-container-data">
              <span className="is-size-5">{elem.data}</span>
            </div>
          </DragDropContainer>
        );
      })}
    </>
  );
};

DragableDatas.propTypes = {
  targetKey: PropTypes.string,
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string,
      index: PropTypes.number,
    })
  ),
};

DragableDatas.defaultProps = {
  targetKey: 'information',
  datas: [
    { data: 'first-information', index: 1 },
    { data: 'second-information', index: 2 },
  ],
};

const DragSingleElem = ({
  targetKey,
  label,
  customDragElement,
  image,
  text,
}) => {
  return (
    <>
      <DragDropContainer
        targetKey={targetKey}
        dragData={{ label }}
        customDragElement={customDragElement}
      >
        <div className="col-flex-centered">
          {image ? <img src={image} height="50px" alt="drag or drop" /> : null}
          <span>{text}</span>
        </div>
      </DragDropContainer>
    </>
  );
};

DragSingleElem.propTypes = {
  targetKey: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
  customDragElement: PropTypes.shape(),
  image: PropTypes.string,
};

DragSingleElem.defaultProps = {
  targetKey: 'targetKey',
  image: null,
  label: null,
  customDragElement: null,
  text: 'text',
};

const DropInfoTarget = ({ targetKey, defaultvalue, label, setValue, ckey }) => {
  const [content, setContent] = useState(defaultvalue);
  const [waitToDisplay, setWaitToDisplay] = useState(false);

  const onHitArticle = (e) => {
    console.log("ON HIT ARTICLE", e)
    setContent(e.dragData.elem.data);
    setValue(e.dragData.elem);
  };

  useEffect(() => {
    setContent(defaultvalue);
  }, [defaultvalue])

  useEffect(() => {
    setWaitToDisplay(true);
  }, [targetKey])

  useEffect(() => {
    setWaitToDisplay(false);
  }, [waitToDisplay])

  return (
    <div key={ckey} >
      {
        !waitToDisplay ?
      <DropTarget targetKey={targetKey} onHit={(e) => onHitArticle(e)}>
        {label ? <Label content={label} ckey={`Label_${ckey}`} /> : null}
        <div className="drop-container-data">
          <span className="is-size-5">{content}</span>
        </div>
      </DropTarget>
      : null
}
    </div>
  );
};

DropInfoTarget.propTypes = {
  ckey: PropTypes.string,
  targetKey: PropTypes.string,
  defaultvalue: PropTypes.string,
  label: PropTypes.string,
};

DropInfoTarget.defaultProps = {
  ckey: 'DropInfoTarget',
  targetKey: 'information',
  defaultvalue: 'defaultvalue',
  label: ""
};

export { DragableDatas, DragSingleElem, DropInfoTarget };
