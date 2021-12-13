import React, { Component } from "react";
import "./Banana.css";

export default class Banana extends Component {
    constructor(){
        super()
    
    const banana = document.querySelector(".banana");
    const container = document.querySelector(".container");
    
    function createbanana() {
      const clone = banana.cloneNode(true);
      clone.style.paddingLeft = Math.random() * 10 + "px"; // creating left padding
      clone.style.animationDuration = Math.random() * 5 + 3 + "s"; // animation duration between 3-5
      clone.style.opacity = Math.random() * 1;
      const randomC = Math.random() * 200;
     const randomA = Math.random() * 200;
     const randomB = Math.random() * 56;
      clone.style.color = `rgb(${randomA + 256},${randomB + 200},${randomC + 100})`;
      container.append(clone); // adding clone banana to container
    }
    const s = setInterval(createbanana, 100); // to create more bananas decrease 100
    
    setTimeout(() => {
      clearInterval(s);
    }, 3000); // banana creation stops after 3000 milliseconds or 3s
    
    }
	render() {
		return (
			<div class="container">
            <i class="banana"></i>
            </div>
		);
	}
}