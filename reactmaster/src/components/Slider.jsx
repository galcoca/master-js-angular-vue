import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Slider extends Component {

    render() {
        let buttonState
		if (this.props.size === "sliderBig") {
			buttonState = (<NavLink to="/blog" className="btnWhite">{this.props.btn}</NavLink>);
		}
        return(
            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>
                {buttonState}
            </div>
        );
    }
}

export default Slider;