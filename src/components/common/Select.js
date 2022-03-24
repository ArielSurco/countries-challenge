import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { placeholder, options, className, onChange } = props;
  return (
    <select
      name="region"
      id="region"
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
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Select.defaultProps = {
  className: '',
  onChange: () => undefined
};

export default Select;
