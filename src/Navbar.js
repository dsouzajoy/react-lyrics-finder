import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <div className="Navbar navbar-fixed">
        <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"><i className="material-icons">audiotrack</i>Lyrics?</a>
    </div>
  </nav>
        </div>
    );
  }
}

export default Navbar;
