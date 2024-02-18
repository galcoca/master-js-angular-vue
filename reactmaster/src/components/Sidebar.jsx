import React, { Component } from "react";

class Sidebar extends Component {
	render() {
		return (
			<aside id="sidebar">
				<div id="navBlog" className="sidebarItem">
					<h3>You can</h3>
					<p href="#" className="btn btnSuccess">
						Create Article
					</p>
				</div>
				<div id="search" className="sidebarItem">
					<h3>Searcher</h3>
					<p>Search the article you are looking for</p>
					<form>
						<input type="text" name="search" />
						<input
							type="submit"
							name="submit"
							value="Search"
							className="btn"
						/>
					</form>
				</div>
			</aside>
		);
	}
}

export default Sidebar;
