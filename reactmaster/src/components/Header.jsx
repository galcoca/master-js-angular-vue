import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink  } from "react-router-dom";

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
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/blog">Blog</NavLink>
							</li>
							<li>
								<NavLink to="/form">Form</NavLink>
							</li>
							<li>
								<NavLink to="/movies">Movies</NavLink>
							</li>
							<li>
								<NavLink to="/testpage">Page</NavLink>
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
