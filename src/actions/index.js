import axios from "axios";
const FETCH_USER = "FETCH_USER";

const BASE_API_URL = "https://www.metaweather.com/api";
export const fetchWeather = (lat, lng) => async dispatch => {
  try {
    const url = `${BASE_API_URL}/location/search/?lattlong=${lat},${lng}`;
    
    const res = await axios.get(`${}/${url}`);
    console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
