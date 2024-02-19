import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
	state = {
		movieList: [
			{title: 'Spiderman 4', year: 2020, image: 'https://i.blogs.es/4d5a9c/spiderman-4/1366_521.jpeg'},
			{title: 'Avengers End Game', year: 2018, image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp'},
			{title: 'Batman vs Superman', year: 2015, image: 'https://cinepremiere.com.mx/wp-content/uploads/2016/03/batman-vs-superman-critica.jpg'},
			{title: 'Monsters Inc', year: 2012, image: 'https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt2975c13bc160bfa8/64f87c17f5f25f0b72ccc13f/MonstersInc.jpg'},
		],
		name: 'Gabriel',
		favorite: {}
	};

	changeTitle = () => {
		const { movieList } = this.state;
		const random = Math.floor(Math.random() * 4);
		movieList[random].title = "Title Changed using Random index: "+random;

		this.setState({
			movieList: movieList
		});
	}

	favoriteMovie = (movie, index) => {
		this.setState({
			favorite: movie
		});
	}

	
	render() {
		const pStyle = {
			background: 'green',
			color: 'white',
			padding: '10px'
		}

		var favorite;
		if (this.state.favorite.title) {
			favorite = (
				<p className="favorite" style={pStyle}>
					<strong>The favorite movie is: </strong>
					<span>{this.state.favorite.title}</span>
				</p>
			);
		} else {
			favorite = (<p>No favorite movie selected</p>);
		}

		return (
			<div id="content" className="Movies">
				<h2 className="subHeader">Movies</h2>
				<p>
					Favorite movies of {this.state.name}
				</p>
				<div>
					<button onClick={this.changeTitle}>Change Title</button>
				</div>
				{favorite}
				<div id="articles">
					{
						this.state.movieList.map((theMovie,index) => {
							return(
								<Movie key={index} index={index} movie={theMovie} markFavorite={this.favoriteMovie} />
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default Movies;
