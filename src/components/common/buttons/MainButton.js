import React from 'react';
import { Link } from 'react-router-dom';

const MainButton = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Link className={`btn ${className}`} {...rest}>
      {children}
    </Link>
  );
};

export default MainButton;
