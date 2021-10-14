import * as axios from "axios";

let instanse = axios.create({
    baseURL: "https://restcountries.com/v2/",
})

export function getCountriesAPI() {
    return instanse.get("all", {}).then(response => {
        return response.data;
    });
}

export function searchCountriesAPI(name) {
    return instanse.get(`name/${name}`, {}).then(response => {
        return response.data;
    });
}

export function filterRegionsAPI(region) {
    return instanse.get(`region/${region}`, {}).then(response => {
        return response.data;
    });
}

