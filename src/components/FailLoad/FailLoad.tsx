import { Button, Box, Typography } from "@mui/material";

type props = {
    loadCountries: () => void,
}

const FailLoad = (props: props) => {

    const onCountryLoadClick = () => {
        props.loadCountries();
    }

    return (
        <Box>
            <Typography sx={{ color: 'text.secondary' }}>Fail to load countries list</Typography>
            <Button onClick={onCountryLoadClick} variant="contained">Load again</Button>
        </Box>
    );
}

export default FailLoad;