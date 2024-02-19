import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

class BlankTemplate extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="center">
                    <Outlet />
					<Sidebar />
					<div className="clearfix"></div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default BlankTemplate;