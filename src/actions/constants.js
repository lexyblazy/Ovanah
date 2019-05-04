//ACTIONS
export const FETCH_USER = 'FETCH_USER';
export const FETCH_CITY_DATA = 'FETCH_CITY_DATA';
export const FETCH_CITY_DATA_SUCCESS = 'FETCH_CITY_DATA_SUCCESS';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const NO_CITY_DATA = 'NO_CITY_DATA';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const DEFAULT_PASSWORD = '12345';
export const INCORRECT_PASSWORD = 'Incorrect credentials';

//COLORS
export const PRIMARY_COLOR = '#3498db';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const BASE_URL = 'https://www.metaweather.com';
export const PROXIED_BASE_URL = `${PROXY_URL}https://www.metaweather.com`;
export const BASE_API_URL = `${PROXIED_BASE_URL}/api`;
