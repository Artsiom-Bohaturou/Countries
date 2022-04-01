import { setCountry } from './../store/getCountryReducer';
import { appState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { countryInfo } from '../types/types';

const useCountryInfo = (countryName: string | undefined): countryInfo | null => {
    const countriesList = useSelector((state: appState) => state.getCountriesReducer.countries);
    const dispatch = useDispatch();

    if (countriesList) {
        const country = countriesList.filter((e: countryInfo) => e.name.common === countryName)[0];
        dispatch(setCountry(country));
        return country;
    }
    return null;
}

export default useCountryInfo;