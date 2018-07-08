import React, { Component } from 'react';
import '../Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-section">
        <nav class="">
          <a className="logo-position" href="#">
            <img src={require("./Llogo.png")} width="180" height="130" alt=""/>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;