import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../../table.scss';
import { useLocation } from 'react-router-dom';

const FlightsList = ({ flightsList, direction }) => {
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
        {flightsList.map(flight => {
          const getTime = data => moment(new Date(data)).format('H:mm');
          const localeTimeArrival = getTime(flight.timeToStand);
          const localeTimeDeparture = getTime(flight.timeDepShedule);

          const arrivalStatus = flight.timeLandFact
            ? getTime(flight.timeLandFact)
            : flight.timeLandCalc && getTime(flight.timeLandCalc);
          const departureStatus = flight.timeTakeofFact
            ? getTime(flight.timeTakeofFact)
            : flight.timeDepExpectCalc && getTime(flight.timeDepExpectCalc);

          const terminalName =
            flight.term === 'A'
              ? 'terminal-name terminal-name_green'
              : 'terminal-name terminal-name_blue';

          return (
            <tr className="table-row" key={flight.ID}>
              <td className="terminal-field table-cell">
                <span className={terminalName}>{flight.term}</span>
              </td>
              <td className="time-field">
                {direction === 'arrival' && localeTimeArrival}
                {direction === 'departure' && flight.timeDepShedule && localeTimeDeparture}
              </td>
              <td className="city-field">
                {flight['airportToID.city_en']}
                {flight['airportFromID.city_en']}
              </td>
              <td className="status-field">
                {direction === 'departure' && departureStatus}
                {direction === 'arrival' && arrivalStatus}
              </td>
              <td className="company-field">
                {flight.airline.logoName}
                <img
                  src={flight.airline.en.logoSmallName}
                  width="60"
                  height="40"
                  alt="companyName"
                />
                <p>{flight.airline.en.name}</p>
              </td>
              <td className="flight-field">{flight.codeShareData[0].codeShare}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

FlightsList.propTypes = {
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  direction: PropTypes.string.isRequired,
};

export default FlightsList;
