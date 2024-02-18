import React, { Component } from "react";
import errorImage from '../assets/images/404error.png'

class ErrorComponent extends Component {
	render() {
		return (
			<div id="content" className="Error404">
				<div className="errorImage">
					<img src={errorImage} alt="404Error" />
				</div>
				<div>
					<h1 className="subHeader">404 Page Not Found</h1>
					<p>
						The page you are looking for doesn't exists, please try
						again later
					</p>
				</div>
			</div>
		);
	}
}

export default ErrorComponent;
