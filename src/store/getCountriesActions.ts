import { countryInfo } from './../types/types';

const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL';
const EDIT_FILTERS = 'EDIT_FILTERS';

type getCountriesSuccessType = {
    type: typeof GET_COUNTRIES_SUCCESS,
    payload: {
        countries: Array<countryInfo>,
    }
}

type toggleFetchingType = {
    type: typeof TOGGLE_FETCHING,
    payload: {
        isFetching: boolean
    }
}

type getCountriesFailType = {
    type: typeof GET_COUNTRIES_FAIL,
    payload: {
        hasError: boolean
    }
}

type editFilterType = {
    type: typeof EDIT_FILTERS,
    payload: {
        filterName: string
    }
}

export const setCountries = (countriesList: Array<countryInfo>): getCountriesSuccessType => ({
    type: GET_COUNTRIES_SUCCESS, payload: {
        countries: countriesList,
    }
});

export const toggleFetching = (isFetching: boolean): toggleFetchingType => ({
    type: TOGGLE_FETCHING, payload: {
        isFetching
    }
});

export const fetchError = (hasError: boolean): getCountriesFailType => ({
    type: GET_COUNTRIES_FAIL, payload: {
        hasError
    }
});

export const editFilters = (filterName: string): editFilterType => ({
    type: EDIT_FILTERS, payload: {
        filterName
    }
});