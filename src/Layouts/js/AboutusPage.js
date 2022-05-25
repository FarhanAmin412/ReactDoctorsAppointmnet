import React, { Component } from 'react';
import AboutUsLower from '../../MyComponents/js/AboutUsLower';
import Navbar from '../../MyComponents/js/Navbar';
import '../../Layouts/css/AboutusPage.css';

export class AboutusPage extends Component {
  

  render() {
    return (
      <div>
          <Navbar/>
          <div className="Abp"><AboutUsLower/></div>
      </div>
    )
  }
}

export default AboutusPage