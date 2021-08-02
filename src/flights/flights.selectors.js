import { createSelector } from 'reselect';
import moment from 'moment';

export const flightsListSelector = state => state.flights.flightsList;

export const getFilterListSelector = createSelector([flightsListSelector], flightsList =>
  flightsList.filter(
    flight =>
      moment(new Date(flight.timeToStand)).format('MMM Do YY') ===
      moment(new Date()).format('MMM Do YY'),
  ),
);
