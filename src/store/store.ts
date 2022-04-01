import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import getCountriesReducer from "./getCountriesReducer";
import getCountryReducer from "./getCountryReducer";

const reducers = combineReducers({ getCountriesReducer, getCountryReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export type appState = ReturnType<typeof store.getState>;

export default store;