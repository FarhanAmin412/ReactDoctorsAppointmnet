import React, { Component } from 'react';
import '../css/Footer.css'


export class Footer extends Component {
  state = {
    url: "",
    alt: "",
  }

  render() {
    return (
        <div id="Contact" class="offset">
        <footer>
            <div class="row justify-content-center">
                <div class="col-md-5 text-center">
                    <img src={this.props.pic} alt={this.state.alt}/>
                    <p>At our core is a collection of medical and coorporation that represents everything your health and body need to be as good as youb possibly can.</p>
                    <strong>Contact Info</strong>
                    <p>(+92) 300-4121730
                        <br/> CarePoint@gmail.com
                    </p>
                    <div id="sep">
                        <a href={this.state.url} alt={this.state.alt}><i class="fab fa-facebook-square"></i></a>
                        <a href={this.state.url} alt={this.state.alt}><i class="fab fa-twitter-square"></i></a>
                        <a href={this.state.url} alt={this.state.alt}><i class="fab fa-instagram-square"></i></a>
                    </div>
                </div>
                <hr class="socket"/> &copy; Care Point Online.
            </div>
        </footer>
    </div>
    )
  }
}

export default Footer;