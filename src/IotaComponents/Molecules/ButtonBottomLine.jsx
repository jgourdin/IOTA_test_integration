import React from 'react';
import PropTypes from 'prop-types';
import ButtonPrec from '../Atoms/Buttons/ButtonPrec';
import ButtonNext from '../Atoms/Buttons/ButtonNext';

const ButtonBottomLine = ({
  disablePrev,
  disableNext,
  onPrev,
  onNext,
  thisIsTheEnd,
  displayChild,
  nextText,
  prevText
}) => {
  return (
    <div className="col-flex-start my-3">
      <div className="row-flex-between">
        <div className="mx-2" style={{ opacity: `${disablePrev ? '0' : '1'}` }}>
          <ButtonPrec onValidate={onPrev} disabled={disablePrev} 
          text={prevText ? prevText : 'Précédent'} />
        </div>
        {/* footer onglet props title */}
        {displayChild}
        <div
          className={`mx-2 ${disableNext ? 'black-and-white fantomatic' : ''}`}
        >
          <ButtonNext
            disabled={disableNext}
            onValidate={onNext}
            text={nextText ? nextText : thisIsTheEnd ?  "J'ai fini !" : 'Suivant'}
          />
        </div>
      </div>
    </div>
  );
};



ButtonBottomLine.propTypes = {
  disablePrev: PropTypes.bool,
  disableNext: PropTypes.bool,
  thisIsTheEnd: PropTypes.bool,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  displayChild: PropTypes.node,
};

ButtonBottomLine.defaultProps = {
  disablePrev: false,
  disableNext: false,
  thisIsTheEnd: false,
  onPrev: () => {
    console.log('Click Prev');
  },
  onNext: () => {
    console.log('Click Next');
  },
  displayChild: <div />,
};
export default ButtonBottomLine;
