/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainButton = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Link className={`btn ${className}`} {...rest}>
      {children}
    </Link>
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
