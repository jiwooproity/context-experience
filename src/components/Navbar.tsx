import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <div className="navbar_list">
                    <Link to="/count">Counter</Link>
                    <Link to="/todolist">ToDoList</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;