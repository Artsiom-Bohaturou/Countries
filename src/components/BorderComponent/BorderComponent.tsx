import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

type props = {
    countryName: string
}

const BorderComponent = (props: props) => {
    return (
        <Link to={`/country/${props.countryName}`}>
            <Typography component='span' sx={{ bgcolor: 'primary.main', ml: 2, p: '5px', cursor: 'pointer', boxShadow: '0px 0px 5px black' }}>
                {props.countryName}
            </Typography>
        </Link>
    );
}

export default BorderComponent;