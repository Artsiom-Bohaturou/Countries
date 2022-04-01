import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";



const ToMainPageButton = () => {
    return (
        <Link to='/'><Button variant="contained" sx={{ m: '60px 24px' }}><ArrowBackIcon /> Back To Main Page</Button></Link>
    );
}

export default ToMainPageButton;