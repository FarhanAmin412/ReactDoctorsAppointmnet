import React from 'react';
import Navbar from '../../MyComponents/js/Navbar';

function BookmePage() {

    return (
      <div style={{backgroundColor: "#f5f5f5"}}>
          <Navbar/>
          <h1 
          style={{
            position: "absolute",
            top: "100px",
            left: "150px",
            color: "#1ebba3"
          }}
          >
          Nothing in the BOOK ME Right NOW!
          </h1>
      </div>
    )
}

export default BookmePage;