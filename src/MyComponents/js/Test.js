import React from 'react'
import { useLocation } from 'react-router-dom';
import DoctorsPage from '../../Layouts/js/DoctorsPage';
function Test() {

  const location = useLocation();
  const {firstName,lastName,email} = location.state;

  return (
    <div>
      <DoctorsPage firstName={firstName} lastName={lastName} email={email}/>
    </div>
  )
}

export default Test;