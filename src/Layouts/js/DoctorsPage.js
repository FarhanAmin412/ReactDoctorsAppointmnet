import React, { Component } from 'react';
import Navbar from '../../MyComponents/js/Navbar';
import Doctors from '../../MyComponents/js/Doctors';
import '../css/DoctorsPage.css';

export class DoctorsPage extends Component {

    
  render() {
    return (
      <div>
          <Navbar/>
          <div id="k"><Doctors 
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          email={this.props.email}
          /></div>
      </div>
    )
  }
}

export default DoctorsPage