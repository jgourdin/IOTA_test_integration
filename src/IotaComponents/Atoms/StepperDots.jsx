import React from 'react';
import { PropTypes } from 'prop-types';

const StepperDots = ({ step, totalSteps }) => {
  const steps = [];
  for (let i = 0; i < totalSteps; i += 1) {
    steps.push(
      <div
        key={`dottystep${i}`}
        className={`dotty-step-button ${
          step === i ? 'dotty-step-button-selected' : ''
        }`}
      />
    );
  }
  return <div className="stepper">{steps}</div>;
};

StepperDots.propTypes = {
  step: PropTypes.number,
  totalSteps: PropTypes.number,
};

StepperDots.defaultProps = {
  totalSteps: 3,
  step: 1,
};

export default StepperDots;
