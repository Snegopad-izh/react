import React from "react";
import s from './Navbar.module.css';

console.log(`${s.item} ${s. active}`);


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/">Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/">Message</a>
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
