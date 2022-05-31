import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>
                    Dialogs
                </NavLink>
            </div>
            <div className={s.item}>
                <a href="/">Photo</a>
            </div>
            <div className={s.item}>
                <a href="/">News</a>
            </div>
            <div className={s.item}>
                <a href="/">Music</a>
            </div>
        </nav>
    );
};

export default Navbar;
