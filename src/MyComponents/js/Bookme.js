import React from 'react';
import { useLocation } from 'react-router-dom';
import Booked from './Booked';


function Bookme() {
  
    const location = useLocation();
    const { RecipientFirstName,RecipientLastName,RecipientEmail,DoctorName,DoctorPosition,DocImg } = location.state;

    
    return (
      <div>
        <Booked RecipientFirstName={RecipientFirstName} RecipientLastName={RecipientLastName} RecipientEmail={RecipientEmail} DoctorName={DoctorName} DoctorPosition={DoctorPosition} DocImg={DocImg}/>
      </div>
    )
}
export default Bookme;