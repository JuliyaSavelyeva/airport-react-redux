import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';
import '../../search-form.scss';

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
      <svg
        className="search-form__img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-512.053 29 44 43"
      >
        <defs />
        <g id="ic_search_white" transform="translate(-512.053 29)">
          <rect id="rectangle" width="44" height="43" className="cls-1" />
          <path
            id="ic_search_white-2"
            data-name="ic_search_white"
            d="M317.717,70.708H316.25l-.55-.538a11.072,11.072,0,0,0,2.933-7.525,11.92,11.92,0,1,0-11.917,11.646,11.628,11.628,0,0,0,7.7-2.867l.55.538V73.4l9.167,8.958,2.75-2.687Zm-11,0a8.065,8.065,0,1,1,8.25-8.063A8.124,8.124,0,0,1,306.717,70.708Z"
            transform="translate(-289.3 -45.625)"
            className="cls-2"
          />
        </g>
      </svg>
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
