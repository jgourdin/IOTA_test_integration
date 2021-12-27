/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import InputImage from './InputImage';
import { onDownload } from './check-images';

const CarouselInput = ({
  ckey,
  content,
  savedData,
  setDataToUse,
}) => {

  const [imageDisplayed, setImageDisplayed] = useState([]);

  useEffect(() => {
    initialize();
  }, [content.itemArray]);

  const initialize = () => {
    // si pas de data sauvegardees
    // creation du contenu des elements selectionnables du carousel
    // a partir de l'objet savedData
    if (
      (!savedData || (typeof savedData === "object" && savedData?.length === 0)) &&
      typeof content.itemArray === "object"
    ) {
      const tempArray = [...content.itemArray.map(elem => {
        // si pas de progress
        elem.isSet = false;
        elem.canDl = true;
        elem.inputs = [...content?.fields.map(field => {
          field.value = '';
          return {...field};
        })];
        return {...elem};
      })];
      setImageDisplayed(tempArray);
    }
  }

  useEffect(() => {
    if (typeof savedData === "object" && savedData?.length > 0) {
      setImageDisplayed(savedData);
    } else {
      initialize();
    }
  }, [savedData]);

  const onChange = (inputValue) => {
    if (imageDisplayed && typeof imageDisplayed === "object") {
    const tempArray = [...imageDisplayed ? imageDisplayed : []];
        tempArray.map(elem => {
          // si c'est le bon element photo/input
          if (elem.id === inputValue.item) {
            // on itere sur les valeurs des differents inputs
            elem?.inputs?.map(inp => {
              // si c'est la bonne clee
              if (elem.id === inputValue.item && inp.key === inputValue.key) {
                inp.value = inputValue.text
              }
              return inp;
            })
          }
          return elem;
      })
      setDataToUse({ 
        answers: tempArray,
        setNext: content?.check(tempArray)
      });
    }
  }

  return (
    <div key={`CarouselImage_${ckey}`} className="row-flex-centered"
      style={{ height: '100%' }}
    >
      <Carousel
        itemNb={content?.itemNb}
        itemArray={savedData || imageDisplayed}
        download={content?.download}
        displayOnlySelected={content?.displayOnlySelected}
        ComponentToDisplay={InputImage}
        stepperDots={content.stepperDots}
        onDownload={() => onDownload(savedData, content?.check, setDataToUse)}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
};

CarouselInput.propTypes = {
  ckey: PropTypes.string,
  content: PropTypes.shape({
    itemNb: PropTypes.number,
    savedData: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

CarouselInput.defaultProps = {
  ckey: 'CarouselInput',
  content: {
    itemNb: 3,
    savedData: [],
  },
};

export default CarouselInput;
