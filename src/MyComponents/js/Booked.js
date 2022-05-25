import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/BookeMe.css';
import { Link } from 'react-router-dom';
export class Booked extends Component {

    state = {
      myList: [
        {id: 0,firstname: "Mehroz",lastname: "Ahmad",email: "mehroz422@gmail.com", image: require('../images/doc-2.jpg'), doctorName: "Dr. T.A SHAH",docpos: "Expert Dermatologist"},
        {id: 1,firstname: "Ali",lastname: "Haneef",email: "ali435@gmail.com", image: require('../images/doc-3.jpg'), doctorName: "Dr. Aizaz B",docpos: "Expert Pediatricianist"},

      ]
    }

    componentDidMount() {
        this.setState(
          {
            myList:[
              ...this.state.myList,{id: 2,firstname: this.props.RecipientFirstName,lastname: this.props.RecipientLastName,email: this.props.RecipientEmail, image: this.props.DocImg, doctorName: this.props.DoctorName,docpos: this.props.DoctorPosition}
            ]
          }
        )
    }

    handleDelete = (object) =>
    {
      this.setState(
        {
          myList: this.state.myList.filter((w) => w.id !== object.id)
        }
      )
    }
  render() {
    return (
        <div>
            <Navbar/>
            <section class="blogs" id="blogs">

    <h1 class="heading"> our <span>blogs</span> </h1>

    <div class="box-container">

        {this.state.myList.map((l) => {
          return(
            <div class="box">
            <div class="image">
                <img src={l.image} alt=""/>
            </div>
            <div class="content">
                <div class="icon">
                    <Link class="a" to={"/"}> <i class="fas fa-calendar"></i> 1st may, 2021 </Link>
                    <Link class="a" to={"/"}> <i class="fas fa-user"></i> {l.firstname + " " + l.lastname} </Link>
                </div>
                <h3>{l.doctorName}</h3>
                <p><span><i class="fas fa-envelope"></i></span>  Email: {l.email}</p>
                <p>{l.docpos}</p>
                <button class="btntd" onClick={this.handleDelete.bind(this,l)}> Cancel Appointment <span class="fas fa-chevron-right"></span> </button>
            </div>
        </div>
          )
        })}

    </div>

</section>
        </div>
    )
  }
}

export default Booked