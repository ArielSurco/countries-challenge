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
  useEffect(() => {
    if (region === '') dispatch(getAllCountries());
    else dispatch(getCountriesByRegion(region));
  }, [region]);
  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  return (
    <Select
      placeholder="Filter by Region"
      options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
      onChange={handleChange}
    />
  );
};

export default RegionSelect;
