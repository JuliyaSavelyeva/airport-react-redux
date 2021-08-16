import React from 'react';
import { Route } from 'react-router-dom';
import SearchFlight from '../searchFlight/SearchFlight.jsx';
import Direction from '../directions/Direction.jsx';
import Buttons from '../button/Buttons.jsx';

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
