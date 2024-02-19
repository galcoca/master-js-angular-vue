import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
    const searchRef = useRef();
    const navigate = useNavigate();
    function getSearchForm(e) {
        e.preventDefault();
        let searchValue = {
            searchValue: searchRef.current.value
        };

        navigate(`/search/${searchValue.searchValue}`);
    }

    return (
        <aside id="sidebar">
			{props.createButton &&
				<div id="navBlog" className="sidebarItem">
					<h3>You can</h3>
					<NavLink to='/article/create' className={() => ['btn', 'btnSuccess'].join(" ")} end>Create Article</NavLink>
				</div>
			}
            <div id="search" className="sidebarItem">
                <h3>Searcher</h3>
                <p>Search the article you are looking for</p>
                <form className="midForm" onSubmit={getSearchForm}>
                    <input type="text" name="search" ref={searchRef} />
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

export default Sidebar;