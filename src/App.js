import { Route } from 'react-router-dom';
import './App.scss';
import AboutCountryContainer from './components/aboutCountry/aboutCountryContainer';
import Header from './components/header/Header';
import Results from './components/results/Results';
import Search from './components/search/Search';
import { useEffect } from "react";
import { getCountries } from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import FoundedCountries from './components/foundedCountries/FoundedCountries';
import FilteredCountries from './components/filteredCountries/FilteredCountries';
import ChangeTheme from './components/utils/changeTheme';


function App(props) {

  let dispatch = useDispatch();
  let countries = useSelector((state) => state.countries);
  let searchResult = useSelector((state) => state.foundedCountries);
  let filteredCountries = useSelector((state) => state.regionCountries);

  useEffect(() => {
    getCountries()(dispatch);
  }, [dispatch]);

  let id = ChangeTheme("dark");

  return (
    <div className="App">
      <Header />
      <main className="main" id={id}>
        <Route exact path="/">
          <Search />
          <Results countries={countries} />
        </Route>

        <Route path="/search/:countryName">
          <FoundedCountries searchResult={searchResult} />
        </Route>

        <Route path="/country/:countryName">
          <AboutCountryContainer countries={countries} />
        </Route>

        <Route path="/filter/:regionName">
          <FilteredCountries filteredCountries={filteredCountries} />
        </Route>

      </main>
    </div>
  );
}

export default App;
