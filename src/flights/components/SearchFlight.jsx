import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../search-form.scss';

const SearchFlight = () => {
  const [value, setValue] = useState('');
  const url = useLocation();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const pathUrl = value ? `${url.pathname}?search=${value}` : url.pathname;

  return (
    <div className="search-form">
      <svg
        className="search-form__img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-512.053 29 44 43"
      >
        <defs data-v-547e829a=""></defs>
        <g data-v-547e829a="" id="ic_search_white" transform="translate(-512.053 29)">
          <rect data-v-547e829a="" id="rectangle" width="44" height="43" className="cls-1"></rect>
          <path
            data-v-547e829a=""
            id="ic_search_white-2"
            data-name="ic_search_white"
            d="M317.717,70.708H316.25l-.55-.538a11.072,11.072,0,0,0,2.933-7.525,11.92,11.92,0,1,0-11.917,11.646,11.628,11.628,0,0,0,7.7-2.867l.55.538V73.4l9.167,8.958,2.75-2.687Zm-11,0a8.065,8.065,0,1,1,8.25-8.063A8.124,8.124,0,0,1,306.717,70.708Z"
            transform="translate(-289.3 -45.625)"
            className="cls-2"
          ></path>
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
        <button className="search-form__btn">Search</button>
      </Link>
    </div>
  );
};

export default SearchFlight;
