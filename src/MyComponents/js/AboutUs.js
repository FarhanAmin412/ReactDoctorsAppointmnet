import React, { Component } from 'react';
import '../css/AboutUs.css';
import {Link} from 'react-router-dom';

class AboutUs extends Component {
    state = {
            Card: [
                {name: "Family Care",text: "Our Doctors and clinic staff work together to provide friendly personalized care to all members of your Family from Birth to age 100+ in any situation.",icon:"fas fa-hand-holding-heart"},
                {name: "Emergency Care",text: "From walk-in care, same-day appointments to online visits OnCare, we'll take good care of you if you experiencing any of the Emergency situation right here",icon:"fas fa-briefcase-medical"},
                {name: "24 Hour Service",text: "Our experience shows that customers need extensive support that requires to be highly professional swiftly react to changes in the law according to the need.",icon:"fas fa-clock"},
                {name: "Outdoor CheckUps",text: "Visiting your doctor on a regular basis is key to a healthy life. Whether you want Outdoor CheckUps, We have all...",icon:"fas fa-project-diagram"},
                {name: "Online Consulting",text: "Get Your Appointment Fixed At Anytime, AnyWhere, Just Visit Our Websites for More Detailed Discussion and Appointments",icon:"fas fa-globe"},
                {name: "Qualified Doctors",text: "We Offer Qualified Doctors gone through exhaustive training on Long Experience they will know what they had done",icon:"fas fa-stethoscope"},
            ]
    }

  render() {
    return (
        <div className="container">
            <div id="Services" class="offset">
        <div class="container section_padding">
            <div class="col-12 section_title align-items-center text-center">
                <p>{this.props.para}</p>
                <h3 class="heading">{this.props.heading}</h3>
                <div class="heading-underline"></div>
            </div>
            <div class="row text-center">
                {this.state.Card.map((c) => {
                    return(
                            <Link
                             to={"/Login"}
                             className="col-lg-4 col-md-6 col-sm-12 py-15 align-items-center t"
                             >
                                    <div class="Service_box box">
                                        <div class="icon">
                                            <i class={c.icon}></i>
                                        </div>
                                        <div class="text">
                                            <h4 class="box_title mb-20">{c.name}</h4>
                                            <p>{c.text}</p>
                                        </div>
                                    </div>
                            </Link>
                    );
                })}
                
            </div>
        </div>
    </div>
        </div>
        
    );
  }
}

export default AboutUs;