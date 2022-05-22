import { Typography } from "@mui/material";
import ToMainPageButton from "./ToMainPageButton";


const NotFound = () => {
    return (
        <>
            <ToMainPageButton />
            <Typography color='text.primary' variant="h2" component='h3'>This country is not found :(</Typography>
        </>
    );
}

export default NotFound;