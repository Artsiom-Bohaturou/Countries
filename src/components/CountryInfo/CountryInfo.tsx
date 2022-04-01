import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useCountryInfo from "../../hooks/getCountryInfo";
import { getCountyBorders } from "../../store/getCountryReducer";
import { appState } from "../../store/store";
import BorderComponent from "../BorderComponent/BorderComponent";
import CountryText from "../CountryText/CountryText";
import ToMainPageButton from "../ToMainPageButton/ToMainPageButton";

const CountryInfo = () => {
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' } }}>
                <Box>
                    <img
                        src={countryInfo?.flags.svg}
                        alt='Country flag'
                        draggable='false'
                        style={{ maxWidth: '500px', width: '100%', maxHeight: '400px' }} />
                </Box>
                <Box sx={{ color: 'text.primary', maxWidth: '700px' }}>
                    <Typography variant='h4' component='h2'>{countryInfo?.name.official}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { md: 'row', xs: 'column' } }}>
                        <Box sx={{ pr: 5 }}>
                            <CountryText
                                header='Native Name'
                                text={countryInfo?.name.nativeName[Object.keys(countryInfo?.name.nativeName)[0]]?.official} />
                            <CountryText
                                header='Population'
                                text={countryInfo?.population.toLocaleString()} />
                            <CountryText
                                header='Region'
                                text={countryInfo?.region} />
                            <CountryText
                                header='Sub Region'
                                text={countryInfo?.subregion} />
                            <CountryText
                                header='Capital'
                                text={countryInfo?.capital.join(', ')} />
                        </Box>
                        <Box>
                            <CountryText
                                header='Top Level Domain'
                                text={countryInfo?.tld.join(', ')} />
                            <CountryText
                                header='Currencies'
                                text={countryInfo && Object.keys(countryInfo?.currencies).map((e) => countryInfo?.currencies[e].name)} />
                            <CountryText
                                header='Languages'
                                text={countryInfo && Object.values(countryInfo?.languages).join(', ')}
                            />
                        </Box>
                    </Box>
                    <Typography variant='h6' sx={{ mt: 5, display: 'flex', flexWrap: 'wrap' }} component='p'>
                        Border Countries: {borders ? borders.map((e, i: number) => (
                            <BorderComponent countryName={e.name.common} key={i} />
                        ))
                            : 'None'
                        }
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default CountryInfo;