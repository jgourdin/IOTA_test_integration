import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MysteryComponent = ({
}) => {

  return (
    <div style={{ height: '100%' }}>
      <div className="text-center">
        <span className="text-basic is-size-4">tu peux utiliser :
          <a 
            href="https://far-profit-8d3.notion.site/Engineering-Wiki-0aa3321131694c069cbfc5f6859ed8d7"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-basic is-size-4"
          >La DOC</a>
        </span>
      </div>
    </div>
  );
};

MysteryComponent.propTypes = {
  arrayOfInput: PropTypes.array,
  setArrayOfInput: PropTypes.func,
  imagesArray: PropTypes.array,
  targetKey: PropTypes.string,
  actions: PropTypes.shape({}),
};
MysteryComponent.defaultProps = {
  arrayOfInput: [],
  setArrayOfInput: () => { },
  imagesArray: [],
  targetKey: '',
  actions: [],
};

export default MysteryComponent;
