import React, { useState } from 'react';
import { Link, Route, useParams, useLocation } from 'react-router-dom';
import SearchFlight from './SearchFlight.jsx';
import Direction from './Direction.jsx';
import Buttons from './Buttons.jsx';

const Home = () => {
  return (
    <div className="page">
      <h2 className="flight-title">Search Flight</h2>
      <SearchFlight />
      <Buttons />
      <Route path="/:direction" component={Direction} />
    </div>
  );
};

export default Home;
