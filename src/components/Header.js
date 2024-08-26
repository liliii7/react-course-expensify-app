import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => (
  <header>
    <h3>Expensify</h3>
    <NavLink to="/"  activeclassname="is-active" exact='true'>
      home
    </NavLink>
    <NavLink to="/create" activeclassname="is-active">
      create
    </NavLink>
    <NavLink to="/edit" activeclassname="is-active">
      edit
    </NavLink>
    <NavLink to="/help" activeclassname="is-active">
      help
    </NavLink>
  </header>
);

export default Header;
