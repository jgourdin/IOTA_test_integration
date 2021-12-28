import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import useWindowSize from "../../Hooks/useWindowSize";
import ButtonArrow from "../Atoms/Buttons/ButtonArrow";
import StepperDots from "../Atoms/StepperDots";
import { onDownload } from './check-images';

const Carousel = ({
  itemNb,
  itemArray,
  ComponentToDisplay,
  displayOnlySelected,
  multiSelect,
  download,
  label,
  stepperDots,
  targetKeys,
  onDownload,
  onSelect,
  onDrop,
  onChange,
}) => {
  const size = useWindowSize();
  const [carouselNb, setCarouselNb] = useState(itemNb);
  const [carouselStep, setCarouselStep] = useState(0);
  const [carouselItem, setCarouselItem] = useState([]);

  useEffect(() => {
    if (displayOnlySelected) {
      setCarouselItem(itemArray.filter((item) => item.isSet));
    } else {
      setCarouselItem(itemArray);
    }
  }, [itemArray]);

  useEffect(() => {
    if (size.width <= 1000) {
      setCarouselNb(1);
    } else if (size.width > 1000 && size.width <= 1280) {
      setCarouselNb(2);
    } else {
      setCarouselNb(itemNb);
    }
  }, [size.width]);

  const handlePrevStep = () => {
    if (carouselStep > 0) 
      setCarouselStep(carouselStep - 1);
  };

  const handleNextStep = () => {
    if (carouselStep < carouselItem.length - carouselNb)
      setCarouselStep(carouselStep + 1);
  };

  return (
    <div className="carousel-container">
      <div className="row-flex-between">
        <div id="carousel-arrows">
          {carouselStep > 0 ? (
            <ButtonArrow sens="left" onValidate={() => handlePrevStep()} />
          ) : null}
        </div>
        {/* carousel content */}
        {carouselItem.map((item, index) => {
          if (index >= carouselStep && index < carouselStep + carouselNb) {
            return (
              <div key={`item_${index}_${item.id}`} className="col-flex-center">
                {/* carousel item */}
                <div
                  key={item.id}
                  className={
                    item.isSet
                      ? "carousel-image-selected flat-shadow carousel-image-frame"
                      : " carousel-image-frame"
                  }
                  style={{ height: "100%" }}
                >
                  <ComponentToDisplay
                    ckey={`component_${index}_${item.id}`}
                    /** shared props and configs */
                    /** image item */
                    /** drag and drop item */
                    id={item.id}
                    source={item.img}
                    alt={item.title}
                    selected={item.isSet}
                    inputs={item.inputs}
                    download={download}
                    label={label ? item.targetDropped?.title : ""}
                    multiSelect={multiSelect}
                    onDownload={() => onDownload(item.id)}
                    /** drang and drop carousel */
                    targetKeys={targetKeys}
                    targetDropped={item.targetDropped}
                    onDrop={onDrop}
                    /** image carousel */
                    onSelect={() => onSelect(item.id)}
                    /** input carousel */
                    onChange={(value) => onChange({ ...value, item: item.id })}
                  />
                </div>
               </div>
            );
          }
          return null;
        })}
        <div id="carousel-arrows">
          {carouselStep + carouselNb < carouselItem.length ? (
            <ButtonArrow sens="right" onValidate={() => handleNextStep()} />
          ) : null}
        </div>
      </div>
      {stepperDots ? (
        <div style={{ height: "50px", marginTop: "10px" }}>
          <StepperDots
            step={carouselStep % 6}
            totalSteps={
              carouselItem.length < 6
                ? carouselItem.length - (carouselNb - 1)
                : 6
            }
          />
        </div>
      ) : null}
    </div>
  );
};

Carousel.propTypes = {
  returnData: PropTypes.func,
  itemNb: PropTypes.number,
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isSet: PropTypes.bool,
      img: PropTypes.string, // url
      title: PropTypes.string,
    })
  ),
  multiSelect: PropTypes.bool,
  download: PropTypes.bool,
  label: PropTypes.bool,
  stepperDots: PropTypes.bool,
  onDrop: PropTypes.func,
  targetKeys: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      placeHolder: PropTypes.string,
    })
  ),
};

Carousel.defaultProps = {
  returnData: () => console.error("Try to select"),
  itemNb: 3,
  itemArray: [],
  multiSelect: false,
  download: false,
  label: false,
  stepperDots: true,
  displayOnlySelected: false,
  onDrop: () => {
    console.log("try to drop");
  },
  targetKeys: [],
};

export default Carousel;
