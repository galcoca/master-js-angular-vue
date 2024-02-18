import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

class Header extends Component {
	render() {
		return (
			<header id="header">
				<div className="center">
					<div id="logo">
						<img src={logo} alt="appLogo" />
						<span id="brand">
							<strong>Curso</strong>React
						</span>
					</div>
					<nav id="menu">
						<ul>
							<li>
								<p href="#">Home</p>
							</li>
							<li>
								<p href="#">Blog</p>
							</li>
							<li>
								<p href="#">Form</p>
							</li>
							<li>
								<p href="#">Page 1</p>
							</li>
							<li>
								<p href="#">Page 2</p>
							</li>
						</ul>
					</nav>
					<div className="clearfix"></div>
				</div>
			</header>
		);
	}
}

export default Header;
