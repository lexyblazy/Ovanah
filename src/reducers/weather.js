import {
  FETCH_CITY_DATA_SUCCESS,
  FETCH_CITY_DATA,
  GET_CITIES_SUCCESS,
  NO_CITY_DATA,
} from '../actions/constants';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CITY_DATA:
      return { ...state, fetchingCityData: true,noCityData: false, };
    case FETCH_CITY_DATA_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        fetchingCityData: false,
        multipleCities: false,
        noCityData: false,
      };
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        multipleCities: true,
        fetchingCityData: false,
        noCityData: false,
      };
    case NO_CITY_DATA:
      return {
        ...state,
        cities: [],
        payload: {},
        multipleCities: true,
        fetchingCityData: false,
        noCityData: true,
      };
    default:
      return state;
  }
}
