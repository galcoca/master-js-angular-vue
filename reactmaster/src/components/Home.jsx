import React, {Component} from "react";
import Articles from "./Articles";

class Home extends Component {
    render(){
        return(
            <div id="content">
                <h2 className="subHeader">Last Articles</h2>
                <Articles home="true"/>
            </div>
        )
    }
}

export default Home