import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarImg from "../image/navbar.svg"

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        {/* <nav className="z-depth-0"> */}
          {/* <div className="nav-wrapper white"> */}
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
            <p style={{color: 'white', fontSize: '53px', textAlign: 'right', paddingRight: '3%'}}><span style={{color:'#FF9100'}}>P</span>ERMIERE <span style={{color:'#FF9100'}}>F</span>IVERR <span style={{color:'#FF9100'}}>E</span>NVATO</p>
            </Link>
        {/* </nav> */}
      </div>
    );
  }
}

export default Navbar;
