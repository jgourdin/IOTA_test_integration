import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonArrow from '../Atoms/Buttons/ButtonArrow';
import StepperDots from '../Atoms/StepperDots';

const Carousel = ({ childrensArray, itemNb }) => {
  const [carouselStep, setCarouselStep] = useState(0);

  const handlePrevStep = () => {
    if (carouselStep > 0) setCarouselStep(carouselStep - 1);
  };
  const handleNextStep = () => {
    if (carouselStep < childrensArray.length - itemNb) {
      setCarouselStep(carouselStep + 1);
    }
  };

  return (
    <>
      <div
        className="col-flex-centered"
        style={{ width: '100%', height: '100%' }}
      >
        <div className="row-flex-centered">
          <div
            id="carousel-arrows"
            className="row-flex-centered"
            style={{ flex: '0 0 50px' }}
          >
            {carouselStep > 0 ? (
              <ButtonArrow sens="left" onValidate={() => handlePrevStep()} />
            ) : null}
          </div>
          {childrensArray.map((elem, index) => {
            if (index >= carouselStep && index < carouselStep + itemNb) {
              return elem;
            }
            return null;
          })}
          <div
            id="carousel-arrows"
            className="row-flex-centered"
            style={{ flex: '0 0 50px' }}
          >
            {carouselStep + itemNb < childrensArray.length ? (
              <ButtonArrow sens="right" onValidate={() => handleNextStep()} />
            ) : null}
          </div>
          <div className="row-flex-centered" />
        </div>
        <div className="m-3">
          <StepperDots
            step={carouselStep % 6}
            totalSteps={
              childrensArray.length < 6
                ? childrensArray.length - (itemNb - 1)
                : 6
            }
          />
        </div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  itemNb: PropTypes.number,
  childrensArray: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string, // url
      name: PropTypes.string, // url
    })
  ),
};

Carousel.defaultProps = {
  childrensArray: [() => <span> test </span>],
  itemNb: 3,
};

export default Carousel;
