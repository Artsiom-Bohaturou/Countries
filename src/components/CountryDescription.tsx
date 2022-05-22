import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useCountryInfo from "../hooks/getCountryInfo";
import { CountryDescriptionBackground, CountryFlagStyles, TextContainer, TextBackground, BorderListContainer } from "../muiStyles/CountryDescriptionStyles";
import { getCountyBorders } from "../store/getCountryReducer";
import { appState } from "../store/store";
import BorderComponent from "./BorderComponent";
import CountryInfoText from "./CountryInfoText";
import ToMainPageButton from "./ToMainPageButton";

const CountryDescription = () => {
    const { countryName } = useParams();
    const countryInfo = useCountryInfo(countryName);
    const borders = useSelector((state: appState) => state.getCountryReducer.countryBorders);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (countryInfo) {
            dispatch(getCountyBorders(countryInfo.borders.join(',')));
        } else if (countryInfo === undefined) {
            navigate('/country/notFound');
        }
    }, [countryInfo]);

    return (
        <>
            <ToMainPageButton />
            <Box sx={CountryDescriptionBackground}>
                <Box>
                    <img
                        src={countryInfo?.flags.svg}
                        alt='Country flag'
                        draggable='false'
                        style={CountryFlagStyles} />
                </Box>
                <Box sx={TextBackground}>
                    <Typography variant='h4' component='h2'>{countryInfo?.name.official}</Typography>
                    <Box sx={TextContainer}>
                        <Box sx={{ pr: 5 }}>
                            <CountryInfoText
                                header='Native Name'
                                text={countryInfo?.name.nativeName[Object.keys(countryInfo?.name.nativeName)[0]]?.official} />
                            <CountryInfoText
                                header='Population'
                                text={countryInfo?.population.toLocaleString()} />
                            <CountryInfoText
                                header='Region'
                                text={countryInfo?.region} />
                            <CountryInfoText
                                header='Sub Region'
                                text={countryInfo?.subregion} />
                            <CountryInfoText
                                header='Capital'
                                text={countryInfo?.capital.join(', ')} />
                        </Box>
                        <Box>
                            <CountryInfoText
                                header='Top Level Domain'
                                text={countryInfo?.tld.join(', ')} />
                            <CountryInfoText
                                header='Currencies'
                                text={countryInfo && Object.keys(countryInfo?.currencies).map((e) => countryInfo?.currencies[e].name)} />
                            <CountryInfoText
                                header='Languages'
                                text={countryInfo && Object.values(countryInfo?.languages).join(', ')}
                            />
                        </Box>
                    </Box>
                    <Box sx={BorderListContainer}>
                        Border Countries:
                        {borders ? borders.map((e, i: number) => (
                            <BorderComponent countryName={e.name.common} key={i} />
                        ))
                            : 'None'
                        }
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CountryDescription;