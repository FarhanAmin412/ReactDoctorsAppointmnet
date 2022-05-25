import React, { Component } from 'react';
import BigCarousel from '../../MyComponents/js/BigCarousel';
import Navbar from '../../MyComponents/js/Navbar'
import AboutUs from '../../MyComponents/js/AboutUs'
import Footer from '../../MyComponents/js/Footer';

export class LandingPage extends Component {
    state = {
            contact_pic: require("../../MyComponents/images/NewLogo.png")
    }

  render() {
    return (
      <div className="LandingPage">
          <Navbar/>
          <BigCarousel/>
          <AboutUs para="What We Do?" heading="Services"/>
          <Footer pic={this.state.contact_pic}/>
      </div>
    )
  }
}
export default LandingPage;