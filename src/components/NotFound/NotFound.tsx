import { Typography } from "@mui/material";
import ToMainPageButton from "../ToMainPageButton/ToMainPageButton";


const NotFound = () => {
    return (
        <>
            <ToMainPageButton />
            <Typography sx={{ color: 'text.primary' }} variant="h2" component='h3'>This country was not founded :(</Typography>
        </>
    );
}

export default NotFound;