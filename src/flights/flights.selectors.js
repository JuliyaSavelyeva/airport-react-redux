import { createSelector } from 'reselect';

export const flightsListSelector = state => state.flights.flightsList;

export const getDeparturesListSelector = createSelector(
  [flightsListSelector],
  flightsList => flightsList,
);

export const getArrivalesListSelector = createSelector(
  [flightsListSelector],
  flightsList => flightsList.arrival,
);
