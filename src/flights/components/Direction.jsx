import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';
import { flightsListSelector } from '../flights.selectors.js';
import * as Actions from '../flights.actions.js';
import FlightsList from './FlightsList.jsx';

const Direction = ({ getFlightsList, flightsList, searchText }) => {
  const url = useLocation();
  const { direction } = useParams();

  console.log(searchText);

  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  if (!flightsList) {
    return false;
  }

  const text = qs.parse(url.search, { ignoreQueryPrefix: true });
  console.log(url);
  console.log(text);

  flightsList = text.search
    ? flightsList.filter(
        flight => flight.codeShareData[0].codeShare.indexOf(text.search.toUpperCase()) >= 0,
      )
    : flightsList;

  console.log(flightsList);

  if (flightsList.length === 0) {
    return <h2 className="no-flights">No flights</h2>;
  }

  return <FlightsList flightsList={flightsList} />;
};

const mapState = state => ({
  flightsList: flightsListSelector(state),
});

const mapDispatch = {
  getFlightsList: Actions.getFlightsList,
};

export default connect(mapState, mapDispatch)(Direction);
