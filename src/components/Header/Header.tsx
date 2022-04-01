import { AppBar, Box, Container, Icon, Toolbar, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';

type props = {
    changeTheme: () => void,
    mode: 'light' | 'dark'
}

const Header = (props: props) => {
    return (
        <AppBar sx={{ bgcolor: 'primary.main', color: 'text.primary' }} position='relative'>
            <Container maxWidth='xl'>
                <Toolbar>
                    <Box
                        sx={{ mr: 2, flexGrow: 1 }}
                    >
                        <Link to="/" >
                            <Typography variant="h5" component="h1" sx={{ color: 'text.primary' }}>Where in the world?</Typography>
                        </Link>
                    </Box>
                    <Typography
                        onClick={props.changeTheme}
                        variant="h6"
                        component="span"
                        sx={{ mr: 2, textTransform: 'capitalize', cursor: 'pointer' }}
                    >
                        {props.mode === 'dark' ? 'light' : 'dark'} mode
                        <Icon sx={{ ml: 1 }} color="inherit">
                            {props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </Icon>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;