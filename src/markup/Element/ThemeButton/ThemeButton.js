import React, { Component } from "react";

export default class ThemeButton extends Component {
  render() {
    return (
      <div className="fixedButton">
        <a
          href="https://wa.me/919741563692"
          target="_blank"
          class="  theme-btn  bt-whatsapp"
        >
          <i class="fa fa-whatsapp size-48"></i>
          <span>whatsapp</span>
        </a>
        <a
          href="https://www.facebook.com/people/Paper-Bird-Preschool-and-daycare/100064875279846/#"
          target="_blank"
          class="  theme-btn bt-facebook"
        >
          <i class="fa fa-facebook size-48"></i>
          <span>facebook</span>
        </a>
        <a
          href="https://www.instagram.com/paperbirdmalini/?igsh=MXYzbTMwemljZDM5ZQ%3D%3D#"
          target="_blank"
          class="  theme-btn bt-instagram"
        >
          <i class="fa fa-instagram size-48"></i>
          <span>instagram</span>
        </a>
        {/* <a href="https://1.envato.market/3zZ9y" target="_blank" class="bt-buy-now theme-btn"><i class="ti-shopping-cart"></i><span>Buy Now</span></a>
				<a href="https://w3itexperts.ticksy.com" target="_blank" class="bt-support-now theme-btn"><i class="ti-headphone-alt"></i><span>Support</span></a> */}
      </div>
    );
  }
}
