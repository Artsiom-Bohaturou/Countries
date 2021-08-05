import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { editCurrentTheme } from "./../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import ChangeTheme from "../utils/changeTheme";

function Header(props) {

    let dispatch = useDispatch();
    let currentTheme = useSelector((state) => state.currentTheme)

    let changeTheme = () => {
        currentTheme === "light" ?
            dispatch(editCurrentTheme("dark")) :
            dispatch(editCurrentTheme("light"));
    }

    let id = ChangeTheme("lightDark");

    return (
        <header className="header" id={id}>
            <h2>Where in the world?</h2>
            <div onClick={changeTheme}>

                {currentTheme === "light" ?
                    <>
                        <FontAwesomeIcon icon={faMoon} />
                        <button>Dark mode</button>
                    </> :
                    <>
                        <FontAwesomeIcon icon={faSun} />
                        <button>Light mode</button>
                    </>
                }

            </div>
        </header>
    );
}

export default Header;