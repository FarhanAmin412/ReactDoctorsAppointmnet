import React, { Component } from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    state = {
        url: "",
        logo: require("../images/NewLogo.png"),
        helpline: "03004121730",
        nav_elements: [
        { name: "Home",route:"/"},
        { name: "Login",route:"/Login"},
        { name: "Sign Up",route:"/Signup"},
        { name: "Doctors",route:"/Doctors"},
        { name: "About Us",route:"/Aboutus"},
        { name: "Book Me",route:"/Bookmepage"},
      ],
    }

  render() {
    return (
        <div className="Header">
      <nav className="navbar navbar-expand">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={this.state.logo} alt=""/>
        </Link>
          <ul className="nav">
            {this.state.nav_elements.map((n) => {
              return(
                <li className="nav-item">
                  <Link className="nav-link active" to={n.route}>{n.name}</Link>
                </li>
              );
            })}
            <div className="line"></div>
          </ul>
        </div>
        <div className="SignUp-Button">
              <Link to={"/Login"}><button className="btn btn-info">Login</button></Link>
        </div>
        <div className="Help">
          <Link to={"/"}>
            <i className="fa fa-phone"></i>
            <p>Call Now:  <br /><strong>({this.state.helpline})</strong></p>
          </Link>
        </div>
      </nav>
    </div>
    );
  }
}

export default Navbar;