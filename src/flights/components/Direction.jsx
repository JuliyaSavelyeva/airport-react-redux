import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';
import { getFilterListSelector } from '../flights.selectors.js';
import * as Actions from '../flights.actions.js';
import FlightsList from './FlightsList.jsx';

const Direction = ({ getFlightsList, flightsList }) => {
  const url = useLocation();
  const { direction } = useParams();

  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  const text = qs.parse(url.search, { ignoreQueryPrefix: true });

  const newFlightsList = text.search
    ? flightsList.filter(
        flight => flight.codeShareData[0].codeShare.indexOf(text.search.toUpperCase()) >= 0,
      )
    : flightsList;

  if (newFlightsList.length === 0) {
    return <h2 className="no-flights">No flights</h2>;
  }

  return <FlightsList flightsList={newFlightsList} direction={direction} />;
};

Direction.propTypes = {
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getFlightsList: PropTypes.func.isRequired,
};

const mapState = state => ({
  flightsList: getFilterListSelector(state),
});

const mapDispatch = {
  getFlightsList: Actions.getFlightsList,
};

export default connect(mapState, mapDispatch)(Direction);
