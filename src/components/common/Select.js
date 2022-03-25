/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { placeholder, options, className, icon, onChange } = props;
  const [selected, setSelected] = useState('');
  const [hiddenOptions, setHiddenOptions] = useState(true);
  const optionHandleClick = (e) => {
    const value = e.target.textContent;
    setSelected(value);
    setHiddenOptions(true);
    onChange(value);
  };
  const selectHandleClick = () => {
    setHiddenOptions(!hiddenOptions);
  };
  const selectHandleBlur = () => {
    setHiddenOptions(true);
  };
  return (
    <div
      className={`select-container ${className}`}
      tabIndex="0"
      onBlur={selectHandleBlur}
      role="menu"
    >
      <div className="select" onClick={selectHandleClick} role="none">
        {selected !== '' ? selected : placeholder}{' '}
        <span
          style={!hiddenOptions ? { transform: 'rotate(180deg)' } : {}}
          className={icon || 'down-arrow-icon'}
        />
      </div>
      <ul className={`options-container ${hiddenOptions ? 'hidden' : ''}`}>
        {options.map((option) => (
          <li className="option" key={option} onClick={optionHandleClick}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func
};

Select.defaultProps = {
  className: '',
  icon: '',
  onChange: () => undefined
};

export default Select;
