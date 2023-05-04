import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <div className="navbar_list">
                    <Link to="/count">ReduxCounter</Link>
                    <Link to="/todolist">ReduxToDoList</Link>
                    <Link to="/mobxcount">MobXCounter</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;