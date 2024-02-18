import React, { Component } from "react";

class Slider extends Component {

    render() {
        return(
            <div id="slider" className="sliderBig">
                <h1>{this.props.title}</h1>
                <p href="#" className="btnWhite">{this.props.btn}</p>
            </div>
        );
    }
}

export default Slider;