import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';
import { filterSearchListSelector } from '../flights.selectors.js';
import * as Actions from '../flights.actions.js';
import FlightsList from './FlightsList.jsx';

const Direction = ({ getFlightsList, flightsList, getFilterFlightsList }) => {
  const url = useLocation();
  const { direction } = useParams();
  const text = qs.parse(url.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  useEffect(() => {
    getFilterFlightsList(text.search);
  }, [text.search]);

  if (!flightsList) {
    return null;
  }

  if (flightsList.length === 0) {
    return <h2 className="no-flights">No flights</h2>;
  }

  return <FlightsList flightsList={flightsList} direction={direction} />;
};

Direction.propTypes = {
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getFlightsList: PropTypes.func.isRequired,
  getFilterFlightsList: PropTypes.func.isRequired,
};

const mapState = state => ({
  flightsList: filterSearchListSelector(state),
});

const mapDispatch = {
  getFlightsList: Actions.getFlightsList,
  getFilterFlightsList: Actions.getFilterFlightsList,
};

export default connect(mapState, mapDispatch)(Direction);
