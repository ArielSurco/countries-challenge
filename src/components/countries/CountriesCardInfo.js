import React from 'react';
import PropTypes from 'prop-types';
import { formatKey, formatValue } from '../../utils/countryFormatter';

const CountriesCardInfo = (props) => {
  const { info, className } = props;
  const keys = Object.keys(info);
  const entries = keys.map((key) => ({
    key,
    value: formatValue(key, info[key])
  }));
  return (
    <ul className={`info ${className}`}>
      {entries.map(({ key, value }) => (
        <li className="item" key={key}>
          <span className="key">{formatKey(key)}: </span>
          {value}
        </li>
      ))}
    </ul>
  );
};

CountriesCardInfo.propTypes = {
  info: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.objectOf(PropTypes.string)
    ])
  ),
  className: PropTypes.string
};

CountriesCardInfo.defaultProps = {
  className: '',
  info: {}
};

export default CountriesCardInfo;
