import "./search.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { editSearchValue, getSearchingCountries, getFilterCountries, editFilterValue } from "./../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChangeTheme from "../utils/changeTheme";

function Search(props) {

    let dispatch = useDispatch();
    let history = useHistory();
    let searchValue = useSelector((state) => state.currentSearchValue);
    let selectedFilter = useSelector((state) => state.filter);

    let inputChange = (e) => {
        dispatch(editSearchValue(e.currentTarget.value));
    }

    let searchCountry = (countryName) => {

        handleClick({ currentTarget: { value: "All" } })

        if (countryName.trim() === "") {
            history.push("/");
            return;
        }

        getSearchingCountries(countryName)(dispatch);
        history.push(`/search/${countryName}`)
    }

    let enterClick = (e) => {
        if (e.code === "Enter") {
            searchCountry(searchValue);
        }
    }

    let handleClick = (e) => {

        dispatch(editFilterValue(e.currentTarget.value));

        if (e.currentTarget.value === "All") {
            history.push(`/`);
            return;
        }

        getFilterCountries(e.currentTarget.value)(dispatch);
        history.push(`/filter/${e.currentTarget.value}`)
    }

    let id = ChangeTheme("lightDark");

    return (
        <div className="search">
            <div>
                <FontAwesomeIcon onClick={() => { searchCountry(searchValue) }} className="icon" icon={faSearch} />
                <input onKeyDown={enterClick} onChange={inputChange} value={searchValue} placeholder="Search for a country..." className="searchInput" type="text" id={id} />
            </div>
            <select value={selectedFilter} onChange={handleClick} className="filter" id={id}>
                <option value="default" disabled>Filter by region</option>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div >
    );
}

export default Search;