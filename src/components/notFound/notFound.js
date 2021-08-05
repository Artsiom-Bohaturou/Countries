import "./notFound.scss";
import BackButton from "../bakcButton/backButton";

function NotFound(props) {
    return (
        <div className="notFound">
            <BackButton />
            <h2>This country is not found</h2>
        </div>
    )
}

export default NotFound;