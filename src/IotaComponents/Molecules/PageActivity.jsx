import React from 'react';
import { PropTypes } from 'prop-types';

const PageShapeActivityLike = ({
  children,
}) => {
  return (
    <div className="col-flex-start" style={{ height: '100%' }}>
      <div
        className="activity-window-position mx-auto"
        style={{ height: '100%' }}
      >
        <div
          className="big-activity-like-window basic-card flat-shadow"
          style={{ height: '100%' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

PageShapeActivityLike.propTypes = {
  children: PropTypes.node,
};

PageShapeActivityLike.defaultProps = {
  children: null,
};

export default PageShapeActivityLike;
