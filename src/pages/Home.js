import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllCountries,
  setFilteredCountries
} from '../redux/actions/actions';
// import { filterByName } from '../utils/countries';
import CountriesCard from '../components/countries/CountriesCard';
import SearchInput from '../components/common/SearchInput';
import RegionSelect from '../components/countries/RegionSelect';
import { filterByName } from '../utils/countries';

const Home = () => {
  const { countries, filteredCountries } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    const filtered = filterByName(value, countries);
    dispatch(setFilteredCountries(filtered));
  };
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  return (
    <>
      <SearchInput
        placeholder="Search for a country..."
        onChange={handleChange}
      />
      <RegionSelect />
      <div className="countries-container">
        {filteredCountries.length > 0 &&
          filteredCountries.map((country) => (
            <CountriesCard
              key={country.name}
              country={country}
              mode="preview"
            />
          ))}
      </div>
    </>
  );
};

export default Home;
