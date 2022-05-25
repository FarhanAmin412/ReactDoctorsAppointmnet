import React, { Component } from 'react';
import '../css/BigCarousel.css';

 class BigCarousel extends Component {
    state = {
        alt: "",
        carousel: [
            {pic: require("../images/headerimage.png"),class: "active"},
            {pic: require("../images/Caro1Img3.jpg"),class: ""},
            {pic: require("../images/Caro1Img2.jpg"),class: ""}
        ]
    }

  render() {
    return (
      <div className="BigCarousel">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                {this.state.carousel.map((c) => {
                                  return(
                                    <div className={"carousel-item " + c.class}>
                                      <img src={c.pic} class="d-block w-100" alt={this.state.alt}/>
                                    </div>
                                  );
                                })}
                            </div>
                        </div>
      </div>
    );
  }
}

export default BigCarousel;