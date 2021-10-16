import "./aboutCountry.scss";
import BackButton from "./../bakcButton/backButton";
import ChangeTheme from "../utils/changeTheme";

function AboutCountry(props) {

    let id = ChangeTheme("lightDark");

    return (
        <div className="aboutCountry">
            <BackButton />
            <div className="moreInfo">
                <img className="flag" alt="" src={props.flag} />
                <div className="info">
                    <h2>{props.name}</h2>
                    <span>
                        <div>
                            <p><strong>Native Name:</strong> {props.nativeName}</p>
                            <p><strong>Population:</strong> {props.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {props.region}</p>
                            <p><strong>Sub Region:</strong> {props.subregion}</p>
                            <p><strong>Capital:</strong> {props.capital}</p>
                        </div>
                        <div>
                            <p><strong>Top Level Domain:</strong> {props.topLevelDomain.map((e, i) => i === props.topLevelDomain.length - 1 ? e : `${e}, `)}</p>
                            <p><strong>Currencies:</strong> {props.currencies && props.currencies.map((e, i) => i === props.currencies.length - 1 ? e.name : `${e.name}, `)}</p>
                            <p><strong>Langeages:</strong> {props.languages.map((e, i) => i === props.languages.length - 1 ? e.name : `${e.name}, `)}</p>
                        </div>
                    </span>
                    <div className="countryBorders"><strong>Border Countries:</strong> {props.borders && props.borders.map((e, i) => <span className="border" id={id} key={`b${i}`}>{e}</span>)}</div>
                </div>
            </div>
        </div >
    );
}

export default AboutCountry;
