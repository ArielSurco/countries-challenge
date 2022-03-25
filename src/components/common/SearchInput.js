import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  const { placeholder, onChange, className } = props;
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <div className="search">
      <input
        className={`search-input ${className}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <span className="search-icon" />
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: '',
  onChange: () => null,
  className: ''
};

export default SearchInput;
