import React, { Component } from "react";

class Movie extends Component {
    
    mark = () => {
        this.props.markFavorite(this.props.movie, this.props.index);
    }
    
    render(){
        const {title, image} = this.props.movie

        return(
            <article className="articleItem">
                <div className="imageWrap">
                    <img src={image} alt={title} />
                </div>

                <h2>{title}</h2>
                <span className="date">
                    5 minutes ago
                </span>
                <p>Read More</p>
                <button onClick={this.mark}>Mark as Favorite</button>
                <div className="clearfix"></div>
            </article>
        )
    }

}

export default Movie;