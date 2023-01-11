import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav>
      <h3>Search</h3>

      <span>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/favourites'>Favourites</NavLink>
      </span>

    </nav>
  );
};

export default Navigation;