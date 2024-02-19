import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

const RootTemplate = (props) => {
	let {sliderTitle, buttonString, size, createButton} = props;
	let {search} = useParams()
	if(search !== undefined) 
	{
		sliderTitle = sliderTitle+" "+search;
	}
	return (
		<div className="App">
			<Header />
			<Slider
				title = {sliderTitle}
				btn= {buttonString}
				size = {size}
			/>
			<div className="center">
				<Outlet/>	
				<Sidebar createButton={createButton}/>
				<div className="clearfix"></div>
			</div>
			<Footer />
		</div>
	)

}

export default RootTemplate;