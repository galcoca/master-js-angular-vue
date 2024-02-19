import React from "react";
import Articles from "./Articles";
import { useParams } from "react-router-dom";

const Search = () => {
    let {search} = useParams();
    return(
        <div id="content">
            <Articles search={search}/>
        </div>
    )
}

export default Search