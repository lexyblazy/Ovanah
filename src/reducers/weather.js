import { FETCH_CITY_DATA_SUCCESS } from "../actions/constants";

const INITIAL_STATE = {}


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CITY_DATA_SUCCESS:
            return { ...state, payload: action.payload }
        default:
            return state
    }
}