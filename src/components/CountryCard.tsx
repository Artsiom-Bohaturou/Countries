import { Card, CardMedia, CardContent, Typography, } from '@mui/material';
import { countryInfo } from '../types/types';
import { Link } from 'react-router-dom';
import { CardBackground } from '../muiStyles/CountryCardStyles';

type props = {
    elementInfo: countryInfo
}

const CountryCard = (props: props) => {

    return (
        <Link to={`country/${props.elementInfo.name.common}`}>
            <Card sx={CardBackground}>
                <CardMedia
                    component="img"
                    height="160"
                    image={props.elementInfo.flags.png}
                    alt="Country flag"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                        {props.elementInfo.name.official}
                    </Typography>
                    <Typography variant="h6" component="h5">
                        Population: <Typography color="text.secondary" component="span">{props.elementInfo.population.toLocaleString()}</Typography>
                    </Typography>
                    <Typography variant="h6" component="h5">
                        Region: <Typography color="text.secondary" component="span">{props.elementInfo.region}</Typography>
                    </Typography>
                    <Typography variant="h6" component="h5">
                        Capital: <Typography color="text.secondary" component="span">{props.elementInfo.capital[0]}</Typography>
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

export default CountryCard;