import "./country.scss";
import { NavLink } from "react-router-dom";
import ChangeTheme from "../../utils/changeTheme";


function Country(props) {

    let id = ChangeTheme("lightDark");

    return (
        <div className="country" id={id}>
            <NavLink to={`/country/${props.name.toLowerCase()}`} >
                <img className="flagIcon" src={props.flag} alt="" />
                <div className="text">
                    <h3>{props.name}</h3>
                    <p>Population: {props.population.toLocaleString()}</p>
                    <p>Region: {props.region}</p>
                    <p>Capital: {props.capital}</p>
                </div>
            </NavLink>
        </div >

    );
}

export default Country;