import { Autocomplete, Box, MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AutocompleteStyles, FilterContainer, FormContainer } from "../muiStyles/SearchFromStyles";
import { getCountries } from "../store/getCountriesReducer";
import { appState } from "../store/store";

const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const SearchForm = () => {
    const dispatch = useDispatch();
    const selectedRegion = useSelector((state: appState) => state.getCountriesReducer.filterName);
    const countriesList = useSelector((state: appState) => state.getCountriesReducer.countries);
    const changeRegion = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getCountries(event.target.value));
    }

    return (
        <Box component='form' sx={FormContainer}>
            <Autocomplete
                autoHighlight
                sx={AutocompleteStyles}
                renderInput={(p) => <TextField {...p} variant="filled" label='Search for a country...' />}
                options={countriesList ? countriesList : []}
                renderOption={(props, option) => (
                    <Link key={option.name.common} to={`/country/${option.name.common}`}>
                        <Box  {...props} component='li'>
                            {option.name.common}
                        </Box>
                    </Link>
                )}
                getOptionLabel={(option) => option.name.common}
            />
            <TextField sx={FilterContainer} select label='Filter by region' value={selectedRegion} onChange={changeRegion}>
                {
                    regions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))
                }
            </TextField>
        </Box>
    );
}

export default SearchForm;