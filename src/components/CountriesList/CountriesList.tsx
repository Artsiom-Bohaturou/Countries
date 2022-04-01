import { Grid, Pagination, Box } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { appState } from '../../store/store';
import { countryInfo } from '../../types/types';
import Card from '../Card/Card';
import SearchForm from '../SearchForm/SearchForm';

const CountriesList = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const data = useSelector((state: appState) => state.getCountriesReducer);
    const pageSize = 8;
    const countriesCount = data.countries?.length;
    const pageCount = countriesCount && Math.ceil(countriesCount / pageSize);

    const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    }

    const currentList = data.countries?.slice(pageSize * (currentPage - 1), pageSize * currentPage);

    return (
        <>
            <SearchForm />
            <Grid container
                columnSpacing={10}
                rowSpacing={8}
            >
                {currentList && currentList
                    .map((e: countryInfo) => (
                        <Grid key={e.name.common} item xs={12} md={3} sm={6}>
                            <Card elementInfo={e} />
                        </Grid>
                    ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                    size='large'
                    page={currentPage}
                    onChange={changePage}
                    count={pageCount}
                />
            </Box>
        </>
    );
}

export default CountriesList;