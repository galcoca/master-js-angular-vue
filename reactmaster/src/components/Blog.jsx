import React, {Component} from "react";
import Articles from "./Articles";

class Blog extends Component {
    render(){

        return(
            <div id="content">
                <Articles/>
            </div>
        )
    }
}

export default Blog