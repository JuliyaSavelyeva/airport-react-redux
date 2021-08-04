import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';
import '../../styles/search-form.scss';
import ImgSearch from './ImgSearch.jsx';

const SearchFlight = () => {
  const url = useLocation();
  const searchText = qs.parse(url.search, { ignoreQueryPrefix: true });
  const initialValue = searchText.search ? searchText.search : '';

  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  let pathUrl = url.pathname;

  if (url.pathname === '/' && value) {
    pathUrl = `/departure?search=${value}`;
  }

  if (url.pathname !== '/' && value) {
    pathUrl = `${url.pathname}?search=${value}`;
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
