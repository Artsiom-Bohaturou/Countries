import Search from "../search/Search";
import Country from "../results/countrys/country";
import BackButton from "../bakcButton/backButton";

function FilteredCountries(props) {
    return (
        <div>
            <BackButton />
            <Search />
            <div className="results">
                {props.filteredCountries && props.filteredCountries.map((e, i) => <Country key={i} flag={e.flag} name={e.name} population={e.population} capital={e.capital} region={e.region} />)}
            </div>
        </div>
    );
}
export default FilteredCountries;