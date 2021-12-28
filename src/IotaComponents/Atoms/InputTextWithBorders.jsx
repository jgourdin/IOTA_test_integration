import React from "react";
import PropTypes from "prop-types";

const InputTextWithBorders = ({ ckey, value, name, placeholder, onChange }) => {

// OnChange va remonter le caractère input et l'id de l'item concerné.

  return (
    <div className="row-flex-centered text-center">
      <input
        type="text"
        className="basic-container"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange({ text: e.target.value, key: name })}
      />
    </div>
  );
};

InputTextWithBorders.propTypes = {
  ckey: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputTextWithBorders.defaultProps = {
  ckey: "InputTextWithBorder",
  value: "",
  name: "",
  placeholder: "",
  onChange: () => {
    console.log("Try to input text");
  },
};

export default InputTextWithBorders;
