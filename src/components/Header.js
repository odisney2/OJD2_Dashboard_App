import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons"></i></span>
    <ul className="main-nav">

    {/* TODO: Will see if i can customize the list item more if have time before the project is due 
              Also leave ActiveLinkBackground in as well, may be make something cool out of it
    */}
      <div className="list-item"> 
        <li><NavLink exact to="/"  activeClassName="ActiveLinkBackground">Home</NavLink></li>
      </div>
      <li><NavLink to="/About" activeClassName="ActiveLinkBackground">About</NavLink></li>
      <li><NavLink to="/Weather" activeClassName="ActiveLinkBackground">Weather</NavLink></li>
      <li><NavLink to="/SunMoon" activeClassName="ActiveLinkBackground">Sun/Moon</NavLink></li>
      <li><NavLink to="/Lego" activeClassName="ActiveLinkBackground">Lego</NavLink></li>
    </ul>    
  </header>
);

export default Header;