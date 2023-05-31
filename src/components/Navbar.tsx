import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <div className="navbar_list">
                    <Link to="/count">{`ReduxCounter ( deleted )`}</Link>
                    <Link to="/reduxtoolkitcount">ReduxToolkitCounter</Link>
                    <Link to="/todolist">ReduxToDoList</Link>
                    <Link to="/mobxcount">MobXCounter</Link>
                    <Link to="/mobxlist">MobXToDoList</Link>
                    <Link to="/recoilcount">RecoilCounter</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;