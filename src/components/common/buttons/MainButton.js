import React from 'react';
import PropTypes from 'prop-types';

const MainButton = (props) => {
  const { children, className, ...rest } = props;
  return (
    <a className={`btn ${className}`} {...rest}>
      {children}
    </a>
  );
};

MainButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

MainButton.defaultProps = {
  className: ''
};

export default MainButton;
