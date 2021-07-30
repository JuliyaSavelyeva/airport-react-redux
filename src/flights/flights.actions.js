import { fetchData } from './tasksGateway.js';

export const GET_FLIGHTS_LIST = 'GET_FLIGHTS_LIST';

export const getFetchData = flightsList => ({
  type: GET_FLIGHTS_LIST,
  payload: {
    flightsList,
  },
});

export const getFlightsList = direction => {
  return function (dispatch) {
    fetchData().then(data => dispatch(getFetchData(data.body[direction])));
  };
};
