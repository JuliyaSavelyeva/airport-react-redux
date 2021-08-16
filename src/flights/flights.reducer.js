import { GET_FLIGHTS_LIST, GET_SEARCH_DATA } from './flights.actions.js';

const initialState = {
  flightsList: [],
  searchText: null,
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS_LIST:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    case GET_SEARCH_DATA:
      return {
        ...state,
        searchText: action.payload.searchText,
      };
    default:
      return state;
  }
};

export default flightsReducer;
