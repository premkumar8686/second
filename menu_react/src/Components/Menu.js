import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Menu = () => {
  return <div>
      <ul>
          <li> <Link to={"home"}> Home </Link></li>
          <li> <Link to={"about-us"}> About Us </Link></li>
          <li> <Link to={"contact-us"}> Contact Us </Link></li>
      </ul>
  </div>;
};

export default Menu;
