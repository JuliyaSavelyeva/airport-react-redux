import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';
import './search-form.scss';
import ImgSearch from '../svg/ImgSearch.jsx';

const SearchFlight = () => {
  const { pathname, search } = useLocation();
  const searchText = qs.parse(search, { ignoreQueryPrefix: true });
  const initialValue = searchText.search ? searchText.search : '';

  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  let pathUrl = pathname;

  if (pathname === '/' && value) {
    pathUrl = `/departure?search=${value}`;
  }

  if (pathname !== '/' && value) {
    pathUrl = `${pathname}?search=${value}`;
  }

  return (
    <div className="search-form">
      <ImgSearch />
      <input
        className="search-form__input"
        type="text"
        placeholder="Flight number"
        value={value}
        onChange={handleChange}
      />
      <Link to={pathUrl} className="search-form__link">
        <button type="submit" className="search-form__btn">
          Search
        </button>
      </Link>
    </div>
  );
};

export default SearchFlight;
