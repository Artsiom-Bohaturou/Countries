import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./backButton.scss";
import ChangeTheme from "../utils/changeTheme";

function BackButton(props) {

    let id = ChangeTheme("lightDark")

    return (
        <NavLink to={"/"}><div className="backButton" id={id}> <FontAwesomeIcon className="leftArrowIcon" icon={faArrowLeft} /> Back</div ></NavLink>
    );
}

export default BackButton;