import React, { Component } from "react";
import errorImage from '../assets/images/404error.png'
import Header from "./Header";
import Footer from "./Footer";

class ErrorComponent extends Component {
	render() {
		return (
			<div className="App">
                <Header />
                <div id="content" className="error404">
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
					<div className="clearfix"></div>
				<Footer />
            </div>
		);
	}
}

export default ErrorComponent;
