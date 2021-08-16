import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';
import { filterSearchListSelector } from '../../flights/flights.selectors.js';
import * as Actions from '../../flights/flights.actions.js';
import FlightsList from '../flight/FlightsList.jsx';

const Direction = ({ getFlightsList, flightsList, getSearchData }) => {
  const url = useLocation();
  const { direction } = useParams();
  const text = qs.parse(url.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  useEffect(() => {
    getSearchData(text.search);
  }, [text.search]);

  if (flightsList.length === 0 && text.search) {
    return <h2 className="no-flights">No flights</h2>;
  }

  return <FlightsList flightsList={flightsList} direction={direction} />;
};

Direction.propTypes = {
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getFlightsList: PropTypes.func.isRequired,
  getSearchData: PropTypes.func.isRequired,
};

const mapState = state => ({
  flightsList: filterSearchListSelector(state),
});

const mapDispatch = {
  getFlightsList: Actions.getFlightsList,
  getSearchData: Actions.getSearchData,
};

export default connect(mapState, mapDispatch)(Direction);
