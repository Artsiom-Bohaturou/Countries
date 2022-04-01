import { getCountryBordersAPI } from './../api/api';
import { ThunkAction } from 'redux-thunk';
import { countryInfo, countryNames } from './../types/types';
import { appState } from './store';

type state = {
    countryInfo: countryInfo | null,
    countryBorders: Array<countryNames> | null,
}

const initialState: state = {
    countryInfo: null,
    countryBorders: null
}

const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
const GET_COUNTRY_BORDER = 'GET_COUNTRY_BORDER';

type getCountrySuccess = {
    type: typeof GET_COUNTRY_SUCCESS,
    payload: {
        countryInfo: countryInfo,
    }
}

type getCountryBorder = {
    type: typeof GET_COUNTRY_BORDER,
    payload: {
        countryBorders: Array<countryNames>,
    }
}

type actions = getCountrySuccess | getCountryBorder;

const getCountryReducer = (state = initialState, action: actions): state => {
    switch (action.type) {
        case GET_COUNTRY_SUCCESS:
            return {
                ...state,
                countryInfo: action.payload.countryInfo
            }
        case GET_COUNTRY_BORDER:
            return {
                ...state,
                countryBorders: action.payload.countryBorders
            }
        default:
            return state;
    }
}

export const setCountry = (countryInfo: countryInfo): actions => ({
    type: GET_COUNTRY_SUCCESS,
    payload: {
        countryInfo
    }
});

const setBorderCountry = (borderList: Array<countryNames>): actions => ({
    type: GET_COUNTRY_BORDER,
    payload: {
        countryBorders: borderList,
    }
});

export const getCountyBorders = (countryCodes: string): ThunkAction<Promise<void>, appState, unknown, actions> => {
    return async (dispatch) => {
        const borders = await getCountryBordersAPI(countryCodes);
        dispatch(setBorderCountry(borders.data));
    }
}

export default getCountryReducer;