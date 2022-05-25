import React, { Component } from 'react';
import '../css/AboutUsLower.css';
import {Link} from 'react-router-dom';

export class AboutUsLower extends Component {
 state = {
        alt: "",
        pic: require('../images/about-img.svg')
 }

  render() {
    return (
      <div>
                    <section class="about" id="about">
                    <h1 class="heading"> about <span>us</span> </h1>
                        <div class="row">
                            <div class="image">
                                <img src={this.state.pic} alt={this.state.alt}/>
                            </div>
                            <div class="content">
                                <h3>we take care of your healthy life</h3>
                                <p>Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.</p>
                                <p>Doctors as clinical scientists apply the principles and procedures of medicine to prevent, diagnose, care for and treat patients with illness, disease and injury and to maintain physical and mental health.</p>
                                <Link to={"/"} className="btnt"> Return <span class="fas fa-chevron-right"></span> </Link>
                            </div>
                        </div>
                    </section>
      </div>
    );
  }
}

export default AboutUsLower;