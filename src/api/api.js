import * as axios from "axios";

export function getCountriesAPI() {
    return axios.get("https://restcountries.eu/rest/v2/all", {}).then(response => {
        return response.data;
    });
}

export function searchCountriesAPI(name) {
    return axios.get(`https://restcountries.eu/rest/v2/name/${name}`, {}).then(response => {
        return response.data;
    });
}

export function filterRegionsAPI(region) {
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`, {}).then(response => {
        return response.data;
    });
}

