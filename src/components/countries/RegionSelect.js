import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getAllCountries,
  getCountriesByRegion
} from '../../redux/actions/actions';
import Select from '../common/Select';

const RegionSelect = () => {
  const [region, setRegion] = useState('');
  const dispatch = useDispatch();
  const options = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  useEffect(() => {
    if (region === 'All' || !region) dispatch(getAllCountries());
    else dispatch(getCountriesByRegion(region));
  }, [region]);
  const handleChange = (value) => {
    setRegion(value);
  };
  return (
    <Select
      className="region-select"
      placeholder="Filter by Region"
      options={options}
      onChange={handleChange}
    />
  );
};

export default RegionSelect;
