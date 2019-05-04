import { combineReducers } from "redux";
import Weather from './weather';
import Auth from './auth';
const rootReducer = combineReducers({
  Weather,
  Auth
});

export default rootReducer;
