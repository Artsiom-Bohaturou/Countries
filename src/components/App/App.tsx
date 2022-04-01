import { createTheme, ThemeProvider, Container, Box, LinearProgress } from '@mui/material';
import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import '../../css/App.css';
import { getCountries } from '../../store/getCountriesReducer';
import CountriesList from '../CountriesList/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryInfo from '../CountryInfo/CountryInfo';
import { appState } from '../../store/store';
import FailLoad from '../FailLoad/FailLoad';
import NotFound from '../NotFound/NotFound';

type modeList = 'light' | 'dark';

const App = () => {
  // @ts-ignore
  const loadMode: modeList = localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light';

  const [mode, setMode] = useState<modeList>(loadMode);
  const dispatch = useDispatch();
  const data = useSelector((state: appState) => state.getCountriesReducer);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const currentMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('mode', currentMode);
          return currentMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode,
        ...(mode === 'light' ? {
          primary: {
            main: 'hsl(0, 0%, 100%)',
            dark: 'hsl(0, 0%, 98%)',
          }
        } : {
          primary: {
            main: 'hsl(209, 23%, 22%)',
            dark: 'hsl(207, 26%, 17%)',
          }
        }
        )
      },
    }),
    [mode],
  );

  const loadCountries = () => {
    dispatch(getCountries());
  }

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header changeTheme={colorMode.toggleColorMode} mode={theme.palette.mode} />
      <Box sx={{ bgcolor: 'primary.dark', minHeight: 'calc(100vh - 64px)', pb: 3 }} component='main'>
        <Container maxWidth='xl' >
          {
            data.isFetching ? <LinearProgress color="success" /> :
              data.hasError ? <FailLoad loadCountries={loadCountries} /> :
                <Routes>
                  <Route path='*' element={<CountriesList />} />
                  <Route path='country' >
                    <Route path=':countryName' element={<CountryInfo />} />
                    <Route path='notFound' element={<NotFound />} />
                    <Route path='' element={<NotFound />} />
                  </Route>
                </Routes>
          }
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;