import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";

const Logo = () => {
    return(
        <Link to="/home">
            <img src={logo} alt="tienda niño"/>
        </Link>
    )
}

export default Logo