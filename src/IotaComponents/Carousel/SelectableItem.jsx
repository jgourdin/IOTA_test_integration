import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SelectableItem = ({
  ckey,
  setSelected,
  children
}) => {
  return (
    <button
      key={`SelectableItem_${ckey}`}
      type="button"
      className="no-button"
      onClick={(rep) => setSelected(rep)}
    >
      {children}
    </button >
  );
};

SelectableItem.propTypes = {
  ckey: PropTypes.string,
  children: PropTypes.node,
  setSelected: PropTypes.func,
};

SelectableItem.defaultProps = {
  ckey: 'SelectableItem',
  children: <div />,
  setSelected: () => { console.log("Try to select") }
};

export default SelectableItem;
