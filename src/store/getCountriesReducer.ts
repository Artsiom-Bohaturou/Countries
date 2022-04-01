import { countryInfo } from './../types/types';
import { ThunkAction } from "redux-thunk";
import { getCountriesAPI, getFilteredCountriesAPI } from "../api/api";
import { appState } from "./store";
import * as actions from './getCountriesActions';

const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL';
const EDIT_FILTERS = 'EDIT_FILTERS';

type state = {
    countries: Array<countryInfo> | null,
    isFetching: boolean,
    hasError: boolean,
    filterName: string,
}

type Infer<T> = T extends { [key: string]: infer U }
    ? U
    : never;

type actionsList = ReturnType<Infer<typeof actions>>

let initialState: state = {
    countries: null,
    filterName: '',
    isFetching: false,
    hasError: false,
};

const getCountriesReducer = (state = initialState, action: actionsList): state => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload.countries
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        case GET_COUNTRIES_FAIL:
            return {
                ...state,
                hasError: action.payload.hasError
            }
        case EDIT_FILTERS:
            return {
                ...state,
                filterName: action.payload.filterName
            }
        default:
            return state;
    }
}

export const getCountries = (filterName?: string): ThunkAction<Promise<void>, appState, unknown, actionsList> => {
    return async (dispatch) => {
        dispatch(actions.fetchError(false));
        dispatch(actions.toggleFetching(true));
        filterName && dispatch(actions.editFilters(filterName));
        let response = null;
        if (filterName && filterName !== 'All') {
            response = await getFilteredCountriesAPI(filterName);
        } else {
            response = await getCountriesAPI();
        }
        if (response.status >= 200 && response.status <= 299) {
            dispatch(actions.setCountries(response.data));
        } else {
            dispatch(actions.fetchError(true));
        }
        dispatch(actions.toggleFetching(false));
    }
}

export default getCountriesReducer;