import { FETCH_CITY_DATA_SUCCESS, FETCH_CITY_DATA } from "../actions/constants";

const INITIAL_STATE = {}


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CITY_DATA:
            return {...state, fetchingCityData: true}
        case FETCH_CITY_DATA_SUCCESS:
            return { ...state, payload: action.payload, fetchingCityData: false }
        default:
            return state
    }
}