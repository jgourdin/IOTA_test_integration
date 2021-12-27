import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import SelectableImage from './SelectableImage';
import ImageItem from './ImageItem';
import { onDownload } from 'IotaComponents/Activities/Carousel/check-images';


const CarouselImage = ({
  ckey,
  content,
  setImageArray, //setDataToUse
  imageArray, //dataToUse
}) => {

  const [imageDisplayed, setImageDisplayed] = useState([]);

  useEffect(() => {
    initialize();
  }, [content.itemArray]);

  const initialize = () => {
    // si pas de data sauvegardees
    // creation du contenu des elements selectionnables du carousel
    // a partir de l'objet itemArray
    if (
      (!imageArray || (typeof imageArray === "object" && imageArray?.length === 0)) &&
      typeof content.itemArray === "object"
    ) {
      const tempArray = content.itemArray.map(elem => {
        // si pas de progress
        elem.isSet = false;
        elem.isDl = false;
        return elem;
      });
      setImageDisplayed(tempArray);
    }
  }

  useEffect(() => {
    if (typeof imageArray === "object" && imageArray?.length > 0) {
      setImageDisplayed(imageArray);
    } 
  }, [imageArray]);

  const onSelect = (id) => {
    const copy = [...typeof imageDisplayed === 'object' ? imageDisplayed : []];
    const tempItem = copy.map((item) => {
      if (item.id === id) {
        item.isSet = !item.isSet;
      } else {
        if (!content?.multiSelect && item.isSet) {
          item.isSet = false;
        }
      }
      return item;
    });
    setImageArray({
      images: tempItem,
      setNext: content?.check(tempItem, content?.nbToSelect)
    });
  }

  return (
    <div key={`CarouselImage_${ckey}`} className="row-flex-centered">
      <Carousel
        itemNb={content?.itemNb}
        itemArray={imageArray || content?.itemArray}
        returnData={(imageArray) => setImageArray(imageArray)}
        stepperDots={content?.stepperDots}
        download={content?.download}
        displayOnlySelected={content?.displayOnlySelected}
        multiSelect={content?.multiselect}
        onSelect={(id) => onSelect(id)}
        onDownload={(id) => onDownload(imageArray, content?.check, setImageArray, id)}
        ComponentToDisplay={content?.selectable ? SelectableImage : ImageItem}
      />
    </div>
  );
};

CarouselImage.propTypes = {
  ckey: PropTypes.string,
  content: PropTypes.shape({
    itemNb: PropTypes.number,
    itemArray: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

CarouselImage.defaultProps = {
  ckey: 'CarouselImage',
  content: {
    itemNb: 3,
    itemArray: [],
  },
};

export default CarouselImage;
