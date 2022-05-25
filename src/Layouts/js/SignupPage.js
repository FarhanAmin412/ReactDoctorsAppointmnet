import React, { Component } from 'react';
import '../css/LoginPage.css';
import Navbar from '../../MyComponents/js/Navbar'
import { Signup } from '../../MyComponents/js/Signup';
import { Link } from 'react-router-dom';

export class LandingPage extends Component {
    state = {
            contact_pic: require("../../MyComponents/images/NewLogo.png"),
            Img: require("../../MyComponents/images/Background.png")

    }

  render() {
    return (
      <div className="LoginPage">
          <Navbar/>
                <div id="F">
                  <div id="L" className="container mt-3">
                      <div className="row">
                        <div className="col-md-5">
                          <Signup />
                          <h6 className='mt-4'>Already Have an account?<Link className="Si mx-3" to={'/Login'}><strong>Login</strong></Link></h6>
                        </div>
                        <div className="col-md-7 my-auto">
                          <img className="img-fluid w-100" src={this.state.Img} alt=""/>
                        </div>
                      </div>
                    </div>
                </div>
      </div>
    )
  }
}
export default LandingPage;