import { useSelector } from "react-redux";

function ChangeTheme(dark) {

    let currentTheme = useSelector((state) => state.currentTheme);

    return currentTheme === "light" ? "" : dark;
}

export default ChangeTheme;