import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  const { placeholder, value, onChange, className } = props;
  return (
    <div className="search">
      <input
        className={`search-input ${className}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="search-icon" />
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => null,
  className: ''
};

export default SearchInput;
