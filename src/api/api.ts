import axios from 'axios';
import { countryInfo, countryNames } from '../types/types';

const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});

export const getCountriesAPI = () => instance
    .get<Array<countryInfo>>('all?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld,cca3')
    .catch((response) => response);

export const getCountryBordersAPI = (codes: string) => instance
    .get<Array<countryNames>>(`alpha?codes=${codes}&fields=name`)
    .catch((response) => response);

export const getFilteredCountriesAPI = (filterName: string) => instance
    .get<Array<countryInfo>>(`region/${filterName}?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld,cca3`)
    .catch((response) => response);
