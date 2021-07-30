import React from 'react';
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
        {flightsList.map(flight => {
          const terminalName =
            flight.term === 'A'
              ? 'terminal-name terminal-name_green'
              : 'terminal-name terminal-name_blue';
          return (
            <tr className="table-row" key={flight.ID}>
              <td className="terminal-field table-cell">
                <span className={terminalName}>{flight.term}</span>
              </td>
              <td className="time-field">{flight.timeToStand.slice(11, 16)}</td>
              <td className="city-field">
                {flight['airportToID.city_en']}
                {flight['airportFromID.city_en']}
              </td>
              <td className="status-field">no</td>
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

export default FlightsList;
