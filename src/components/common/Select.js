import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { name, id, placeholder, options, className, onChange } = props;
  return (
    <select
      name={name}
      id={id}
      className={`select ${className}`}
      onChange={onChange}
    >
      <option value="" selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Select.defaultProps = {
  name: '',
  id: '',
  className: '',
  onChange: () => undefined
};

export default Select;
