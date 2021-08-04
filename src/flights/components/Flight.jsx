import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

const Flight = ({ flight }) => {
  const { pathname } = useLocation();
  const [time, setTime] = useState({
    localTime: null,
    status: null,
  });

  const getTime = data => moment(new Date(data)).format('H:mm');

  useEffect(() => {
    const arrivalStatus = flight.timeLandFact
      ? `Landend ${getTime(flight.timeLandFact)}`
      : `Schedule ${getTime(flight.timeLandCalc)}`;

    const departureStatus = flight.timeTakeofFact
      ? `Taked of ${getTime(flight.timeTakeofFact)}`
      : `Schedule ${getTime(flight.timeDepExpectCalc)}`;

    const localeTimeArrival = getTime(flight.timeToStand);
    const localeTimeDeparture = getTime(flight.timeDepShedule);
    setTime({
      localTime: pathname === '/departure' ? localeTimeDeparture : localeTimeArrival,
      status: pathname === '/departure' ? departureStatus : arrivalStatus,
    });
  }, []);

  const terminalName =
    flight.term === 'A' ? 'terminal-name terminal-name_green' : 'terminal-name terminal-name_blue';

  return (
    <tr className="table-row">
      <td className="terminal-field table-cell">
        <span className={terminalName}>{flight.term}</span>
      </td>
      <td className="time-field">{time.localTime}</td>
      <td className="city-field">
        {flight['airportToID.city_en']}
        {flight['airportFromID.city_en']}
      </td>
      <td className="status-field">{time.status}</td>
      <td className="company">
        <span className="company-field">
          <img src={flight.airline.en.logoSmallName} width="60" height="40" alt="companyName" />
          <p>{flight.airline.en.name}</p>
        </span>
      </td>
      <td className="flight-field">{flight.codeShareData[0].codeShare}</td>
      <td className="empty-field" />
    </tr>
  );
};

Flight.propTypes = {
  flight: PropTypes.shape().isRequired,
};

export default Flight;
