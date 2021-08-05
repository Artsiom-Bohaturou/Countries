import BackButton from "../bakcButton/backButton";
import Country from "../results/countrys/country";
import Search from "../search/Search";
import "./../results/results.scss";

function FoundedCountries(props) {
    return (
        <div>
            <BackButton />
            <Search />
            <div className="results">
                {props.searchResult && props.searchResult.map((e, i) => <Country key={i} flag={e.flag} name={e.name} population={e.population} capital={e.capital} region={e.region} />)}
            </div>
        </div>
    );
}

export default FoundedCountries;