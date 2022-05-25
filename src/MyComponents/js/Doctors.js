import React, { Component } from 'react';
import '../css/Doctors.css';
import { Link } from 'react-router-dom';

export class Doctors extends Component {
    state = {
        Card: [
            {name: "Dr. Rukhsana",pic: require('../images/doc-1.jpg'),position: "Expert Cardiologist",urlimage: '../images/doc-1.jpg'},
            {name: "Dr. T.A Shah",pic: require('../images/doc-2.jpg'),position: "Expert Dermatologist",urlimage: '../images/doc-2.jpg'},
            {name: "Dr. Aizaz B",pic: require('../images/doc-3.jpg'),position: "Expert Pediatricianist",urlimage: '../images/doc-3.jpg'},
            {name: "Dr. Nadeem",pic: require('../images/doc-4.jpg'),position: "Expert Physiotherapist",urlimage: '../images/doc-4.jpg'},
            {name: "Dr. Bukhtawar",pic: require('../images/doc-5.jpg'),position: "Expert Neurologist",urlimage: '../images/doc-5.jpg'},
            {name: "Dr. Khawar",pic: require('../images/doc-6.jpg'),position: "Expert Gynaeclogist",urlimage: '../images/doc-6.jpg'}
        ],
    }

  render() {
    return (
      <div>
        <section class="doctors" id="doctors">

            <h1 class="heading"> our <span>doctors</span> </h1>

            <div class="box-container">

                {this.state.Card.map((c) => {
                    return(
                          <div class="box">
                        <img src={c.pic} alt=""/>
                            <h3>{c.name}</h3>
                            <span>{c.position}</span>
                            <div class="share">
                                <Link 
                                to={"/Bookme"} 
                                state={{RecipientFirstName: this.props.firstName,RecipientLastName: this.props.lastName,RecipientEmail: this.props.email,DoctorName: c.name,DoctorPosition: c.position,DocImg: c.pic}}
                                className="btnt"
                                style={{width: "70%"}}
                                >Get Appointment</Link>
                            </div>
                        </div>
                    );
                })}

            </div>

            </section>

      </div>
    )
  }
}

export default Doctors