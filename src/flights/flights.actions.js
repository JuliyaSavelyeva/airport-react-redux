import { fetchData } from './tasksGateway.js';

export const GET_FLIGHTS_LIST = 'GET_FLIGHTS_LIST';
export const GET_SEARCH_DATA = 'GET_SEARCH_DATA';

export const getFetchData = flightsList => ({
  type: GET_FLIGHTS_LIST,
  payload: {
    flightsList,
  },
});

export const getSearchData = searchText => ({
  type: GET_SEARCH_DATA,
  payload: {
    searchText,
  },
});

export const getFlightsList = direction => {
  return function (dispatch) {
    fetchData().then(data => dispatch(getFetchData(data.body[direction])));
  };
};
