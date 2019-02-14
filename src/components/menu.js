import React from 'react';
import { Link } from "gatsby"

const Menu = () => (
  <nav>
    <ul>
      <li><Link to='/about'>About</Link></li>
      <li><a href="https://medium.com/@linh_huynh_z" target="_blank" rel="noopener noreferrer">Blog</a></li>
      <li><a href="mailto:linh44h@gmail.com">Contact</a></li>
    </ul>
  </nav>
)

export default Menu;
