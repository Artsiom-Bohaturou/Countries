import "./results.scss";
import Country from "./countrys/country";

function Results(props) {
    return (
        <div className="results">
            {props.countries && props.countries.map((e, i) => {
                return <Country key={i} flag={e.flag} name={e.name} population={e.population} capital={e.capital} region={e.region} />
            })}
        </div>
    );
}

export default Results;