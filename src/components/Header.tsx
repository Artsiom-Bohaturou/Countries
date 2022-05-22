import { AppBar, Box, Container, Icon, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';
import { HeaderBackground, HeaderTextContainer, IconStyles, ThemeText } from '../muiStyles/HeaderStyles';

type props = {
    changeTheme: () => void,
}

const Header = (props: props) => {
    const mode = useTheme().palette.mode;
    return (
        <AppBar sx={HeaderBackground} position='relative'>
            <Container maxWidth='xl'>
                <Toolbar>
                    <Box sx={HeaderTextContainer}>
                        <Link to="/" >
                            <Typography variant="h5" component="h1">
                                Where in the world?
                            </Typography>
                        </Link>
                    </Box>
                    <Typography
                        onClick={props.changeTheme}
                        variant="h6"
                        component="span"
                        sx={ThemeText}
                    >
                        {mode === 'dark' ? 'light' : 'dark'} mode

                        <Icon sx={IconStyles} color="inherit">
                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </Icon>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;