/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import DragAndDropItem from './DragAndDropItem';
import {
  DragableDatas,
} from '../Molecules/DragDropSimple';

/** 
 * Composant pour recreer la correspondance
 * entre 1 ou plusieurs elements
 * de l'objet ItemArray passé en props
 **/
const CarouselDragAndDrop = ({
  ckey,
  content,
  savedData,
  setDataToUse,
}) => {
  const [labelList, setLabelList] = useState([]);

  const initialize = () => {
    // si pas de data sauvegardees
    // creation du contenu des elements du drag and drop
    // a partir de l'objet itemArray
    if (
      (!savedData || (typeof savedData === "object" && savedData?.length === 0)) &&
      typeof content.itemArray === "object"
    ) {
      const tempArray = [...content.itemArray];
      tempArray.forEach(elem => {
        // si pas de progress
        elem.targetDropped = null;
      })
      setLabelList(content?.shuffle ? shuffle(tempArray) : tempArray);
    }
  }

  useEffect(() => {
    if (typeof savedData === "object" && savedData?.length > 0) {
      setLabelList(savedData);
      setDataToUse({
        answers: savedData,
        setNext: content.check(content, savedData)
      });
    } else {
      initialize();
    }
  }, [savedData]);

  useEffect(() => {
    console.log("LABEL LIST HAS CHANGED", labelList)
  }, [labelList]);

  useEffect(() => {
    initialize();
  }, [content.itemArray]);

  function shuffle(a) {
    let j;
    let temp;
    let i;
    const tab = a;
    for (i = tab.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * i);
      temp = tab[i];
      tab[i] = tab[j];
      tab[j] = temp;
    }
    return tab;
  }

  const onDrop = (item, key, itemID) => {
    let tmpAnswers = [...labelList];
    tmpAnswers.forEach((elem) => {
      if (elem.id === itemID) {
        elem.targetDropped = { ...elem.targetDropped, [key]: item.data };
        elem.setNext = tmpAnswers.filter(e => e[key] === item.data && e.id === itemID)[0] ? true : false;
      }
    });
    setDataToUse({
      answers: tmpAnswers,
      setNext: content.check(content, tmpAnswers)
    });
  };

  // return un array des elements a relier
  const getLabels = (dragItem) => {
    const temp = [];
    labelList?.forEach((elem) => {
      elem.targetkey = [];
      elem.targetkey.push(dragItem.key);
      temp.push({ data: `${elem[dragItem.key]}` });
    });
    return temp;
  }

  return (
    <div key={`CarouselDragAndDrop_${ckey}`} className="col-flex-start" 
      style={{ height: '100%' }}
    >
      {content?.fields?.map((dragItem, index) => (
        <div key={`CarouselDragAndDrop_${ckey}_${index}`} className="row-flex-centered mb-4">
          <div className="drag-drop-container">
            <DragableDatas
              targetKey={dragItem.key}
              datas={getLabels(dragItem)}
            />
          </div>
        </div>
      ))}
      <div className="row-flex-centered">
        <Carousel
          itemNb={content.itemNb}
          itemArray={labelList || content.itemArray}
          targetKeys={content.fields}
          stepperDots={content.stepperDots}
          onDrop={onDrop}
          ComponentToDisplay={DragAndDropItem}
        />
      </div>
    </div>
  );
};

CarouselDragAndDrop.propTypes = {
  ckey: PropTypes.string,
  setDataToUse: PropTypes.func,
  content: PropTypes.shape({
    itemNb: PropTypes.number,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        placeHolder: PropTypes.string,
      })), // Choice which input is activate ( title | author )
    itemArray: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
  })
};

CarouselDragAndDrop.defaultProps = {
  ckey: 'CarouselDragAndDrop',
  setDataToUse: (el) => console.log('set Array of input not setup', el),
  content: {
    itemNb: 3,
    fields: [],
    itemArray: [],
  },
};

export default CarouselDragAndDrop;
