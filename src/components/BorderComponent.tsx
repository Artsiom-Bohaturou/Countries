import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { TextStyles } from "../muiStyles/BorderComponentsStyles";

type props = {
    countryName: string
}

const BorderComponent = (props: props) => {
    return (
        <Link to={`/country/${props.countryName}`}>
            <Typography component='span' sx={TextStyles}>
                {props.countryName}
            </Typography>
        </Link>
    );
}

export default BorderComponent;