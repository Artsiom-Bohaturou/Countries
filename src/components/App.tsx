import { Container, Box, LinearProgress } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import '../css/App.css';
import { getCountries } from '../store/getCountriesReducer';
import CountriesList from './CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDescription from './CountryDescription';
import { appState } from '../store/store';
import FailLoad from './FailLoad';
import NotFound from './NotFound';
import ThemeContext from '../context/ThemeContext';
import { AppBackground } from '../muiStyles/AppStyles';

const App = () => {

  const dispatch = useDispatch();
  const data = useSelector((state: appState) => state.getCountriesReducer);

  const loadCountries = () => {
    dispatch(getCountries());
  }
  const colorMode = useContext(ThemeContext);

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <>
      <Header changeTheme={colorMode.toggleColorMode} />
      <Box sx={AppBackground} component='main'>
        <Container maxWidth='xl' >
          {
            data.isFetching ? <LinearProgress color="success" /> :
              data.hasError ? <FailLoad loadCountries={loadCountries} /> :
                <Routes>
                  <Route path='*' element={<CountriesList />} />
                  <Route path='country' >
                    <Route path=':countryName' element={<CountryDescription />} />
                    <Route path='notFound' element={<NotFound />} />
                    <Route path='' element={<NotFound />} />
                  </Route>
                </Routes>
          }
        </Container>
      </Box>
    </>
  );
}

export default App;