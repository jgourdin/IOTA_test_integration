import React from 'react';
import { PropTypes } from 'prop-types';
import Logo from '../Atoms/Logo';

const Navbar = ({
  profile,
}) => {

  return (
    <div id="customNavBar">
      <div className="navbar-row">
        <div
          className="navbar-logo my-auto"
          style={{
            flex: `0 0 250px`,
          }}
        >
          <Logo color="white" />
        </div>
        <div className="navbar-left">
        <div className="my-auto pr-2">{profile}</div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  profile: PropTypes.node,
};

Navbar.defaultProps = {
  profile: null,
};

export default Navbar;
