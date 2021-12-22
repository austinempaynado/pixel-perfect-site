import { NavLink } from "react-router-dom";
import "./navbar.css"


export const NavBar = () => {
    return(
    <div id="nav-container">
        <div id="nav-links">
            <li className="nav-list-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-list-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-list-item">
                <NavLink className="nav-link" to="/">Sign out</NavLink>
            </li>
        </div>
        
    </div>);
}