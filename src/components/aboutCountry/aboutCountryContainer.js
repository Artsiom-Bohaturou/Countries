import AboutCountry from "./AboutCountry";
import { useHistory } from "react-router-dom";
import NotFound from "../notFound/notFound";

function AboutCountryContainer(props) {

    let selectedCountry = useHistory().location.pathname.slice(9);
    let country = {};

    for (let i = 0; i < props.countries.length; i++) {
        if (props.countries[i].name.toLowerCase() === selectedCountry.toLowerCase()) {
            country = props.countries[i];
            break;
        }
        if (i === props.countries.length - 1) {
            return <NotFound />
        }
    }

    return (
        <>
            {
                props.countries.length &&
                <AboutCountry
                    name={country.name} flag={country.flag} nativeName={country.nativeName} population={country.population}
                    region={country.region} subregion={country.subregion} capital={country.capital} topLevelDomain={country.topLevelDomain}
                    currencies={country.currencies} languages={country.languages} borders={country.borders} />
            }
        </>
    );
}

export default AboutCountryContainer;