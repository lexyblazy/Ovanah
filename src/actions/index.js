import axios from 'axios';
import {
  FETCH_CITY_DATA,
  FETCH_CITY_DATA_SUCCESS,
  BASE_API_URL,
} from './constants';

export const fetchWeather = (lat, lng) => async dispatch => {
  try {
    const url = `${BASE_API_URL}/location/search/?lattlong=${lat},${lng}`;
    // const res = await axios.get(`${url}`);
    // console.log(res.data);
    // dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    console.log(error);
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
        const { consolidated_weather } = forecastRes.data;

        dispatch({
          type: FETCH_CITY_DATA_SUCCESS,
          payload: consolidated_weather,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
