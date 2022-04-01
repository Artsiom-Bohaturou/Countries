import { Typography } from '@mui/material';

type props = {
    header: string,
    text: any,
}

const CountryText = (props: props) => {
    return (
        <Typography variant='h6' component='p'>{props.header}: <Typography component='span'>
            {!!props.text ? props.text : '-'}
        </Typography>
        </Typography>
    );
}

export default CountryText;