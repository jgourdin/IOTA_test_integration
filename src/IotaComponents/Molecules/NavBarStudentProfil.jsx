import React from 'react';
import { PropTypes } from 'prop-types';
import Avatar from '../Atoms/Avatar';

const NavBarStudentProfil = () => {
  return (
    <>
      <div
        role="presentation"
        className="navbar-profile-click no-button my-auto"
        onClick={() => {}}
      >
        <div className="navbar-profile-info my-auto pr-4 text-center">
          <span className="is-size-6 text-white is-light" alt="identifiant">
            {'Padawan'}
          </span>
        </div>
        <Avatar />
      </div>
    </>
  );
};

NavBarStudentProfil.propTypes = {
  user: PropTypes.shape({
    FirstName: PropTypes.string,
    LastName: PropTypes.string,
    // points: PropTypes.number,
    Passport: PropTypes.number,
    Avatar: PropTypes.shape(),
    ActivityPoint: PropTypes.number,
  }),
  disconnect: PropTypes.func,
};

NavBarStudentProfil.defaultProps = {
  user: {
    FirstName: 'Soki',
    LastName: 'IOTA',
    // points: 350,
    Passport: 0,
    Avatar: {},
    ActivityPoint: 42,
  },
  disconnect: () => console.error('Try to Disconnected'),
};

export default NavBarStudentProfil;
