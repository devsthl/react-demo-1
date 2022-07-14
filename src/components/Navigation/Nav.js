import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <div>
            <div className="topnav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/otp">OTP APP</NavLink>
                <NavLink to="/weather">WeatherApp</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
};
export default Nav;
