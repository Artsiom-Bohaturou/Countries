import { getCountriesAPI, searchCountriesAPI, filterRegionsAPI } from "./../api/api";

const SET_COUNTRIES = "SET_COUNTRIES";
const EDIT_SEARCH_VALUE = "EDIT_SEARCH_VALUE";
const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
const FILTER_COUNTRIES = "FILTER_COUNTRIES";
const EDIT_FILTER = "EDIT_FILTER";
const EDIT_CURRENT_THEME = "EDIT_CURRENT_THEME";

const initialState = {
    countries: [],
    currentSearchValue: "",
    foundedCountries: [],
    regionCountries: [],
    filter: "default",
    currentTheme: "light",
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.countries,
            }
        case EDIT_SEARCH_VALUE:
            return {
                ...state,
                currentSearchValue: action.value,
            }

        case SEARCH_COUNTRIES:
            return {
                ...state,
                foundedCountries: action.countries,
            }
        case FILTER_COUNTRIES:
            return {
                ...state,
                regionCountries: action.region,
            }
        case EDIT_FILTER:
            return {
                ...state,
                filter: action.newFilter,
            }
        case EDIT_CURRENT_THEME:
            return {
                ...state,
                currentTheme: action.theme,
            }
        default:
            return {
                ...state
            }
    }
}

const setCountries = (countries) => {
    return { type: SET_COUNTRIES, countries }
}

export const getCountries = () => {
    return async (dispatch) => {
        let response = await getCountriesAPI();
        dispatch(setCountries(response));
    }
}

const setSearchingCountries = (countries) => {
    return { type: SEARCH_COUNTRIES, countries }
}

export const getSearchingCountries = (countryName) => {
    return async (dispatch) => {
        let response = await searchCountriesAPI(countryName);
        dispatch(setSearchingCountries(response));
    }
}

const setFilterCountries = (region) => {
    return { type: FILTER_COUNTRIES, region }
}

export const getFilterCountries = (region) => {
    return async (dispatch) => {
        let response = await filterRegionsAPI(region);
        dispatch(setFilterCountries(response));
    }
}

export const editFilterValue = (newFilter) => {
    return { type: EDIT_FILTER, newFilter }
}

export const editSearchValue = (value) => {
    return { type: EDIT_SEARCH_VALUE, value }
}

export const editCurrentTheme = (theme) => {
    return { type: EDIT_CURRENT_THEME, theme }
}


export default reducer;