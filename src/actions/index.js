import axios from 'axios';
import {
  FETCH_CITY_DATA,
  FETCH_CITY_DATA_SUCCESS,
  BASE_API_URL,
  GET_CITIES_SUCCESS,
  NO_CITY_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  INCORRECT_PASSWORD,
} from './constants';

const handleResults = (dispatch, data) => {
  if (data.length > 1) {
    dispatch({
      type: GET_CITIES_SUCCESS,
      payload: data,
    });
  } else {
    window.M.toast({ html: 'No data found' });
    dispatch({
      type: NO_CITY_DATA,
      payload: [],
    });
  }
};

export const fetchWeather = (lat, lng) => async dispatch => {
  try {
    const url = `${BASE_API_URL}/location/search/?lattlong=${lat},${lng}`;
    const res = await axios.get(`${url}`);
    handleResults(dispatch, res.data);
  } catch (error) {
    console.log(error);
    window.M.toast({ html: error.response });
  }
};

export const searchCity = searchTerm => async dispatch => {
  try {
    dispatch({ type: FETCH_CITY_DATA });
    const url = `${BASE_API_URL}/location/search/?query=${searchTerm}`;
    const res = await axios.get(url);
    if (res.data) {
      if (res.data.length === 1) {
        const [city] = res.data;
        const woeidUrl = `${BASE_API_URL}/location/${city.woeid}`;
        const forecastRes = await axios.get(woeidUrl);

        dispatch({
          type: FETCH_CITY_DATA_SUCCESS,
          payload: forecastRes.data,
        });
      } else {
        handleResults(dispatch, res.data);
      }
    }
  } catch (error) {
    console.log(error);
    window.M.toast({ html: error.response });
  }
};

export const login = typedPassword => (dispatch, getState) => {
  const {
    Auth: { password = '' },
  } = getState();
  if (password === typedPassword) {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  } else {
    window.M.toast({ html: INCORRECT_PASSWORD });
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};
