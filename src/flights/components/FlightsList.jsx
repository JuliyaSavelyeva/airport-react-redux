import React from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight.jsx';
import '../../table.scss';

const FlightsList = ({ flightsList }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>
      </thead>
      <tbody>
        {flightsList.map(flight => (
          <Flight key={flight.ID} flight={flight} />
        ))}
      </tbody>
    </table>
  );
};

FlightsList.propTypes = {
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FlightsList;
