<template>
	<SliderComponent
		:pageTitle="pageTitle"
		:buttonText="buttonText"
		:sliderType="sliderType"
	/>
	<div className="center">
		<section id="content">
			<h2 class="subHeader">{{ pageSubtitle }}</h2>

			<div class="favorite" v-if="favoriteMovie">
				La pelicula favorita es:
				<h3>{{ favoriteMovie.title }}</h3>
			</div>

			<div id="articles">
				<div v-for="movie in moviesUppercase" v-bind:key="movie.title">
					<MovieItem
						:movie="movie"
						v-on:favoriteMovie="favoriteSelected"
					></MovieItem>
				</div>
			</div>
		</section>
		<SidebarComponent />
		<div class="clearfix"></div>
	</div>
</template>

<script>
import MovieItem from "../items/MovieItem";
import SliderComponent from "../templates/SliderComponent.vue";
import SidebarComponent from "../templates/SidebarComponent.vue";

export default {
	name: "MoviesComponent",
	components: {
		MovieItem,
		SliderComponent,
		SidebarComponent,
	},
	methods: {
		favoriteSelected(favoriteMovie) {
			this.favoriteMovie = favoriteMovie;
		},
	},
	computed: {
		moviesUppercase() {
			const modifiedMovieList = this.movieList.map((movie) => {
				return {
					...movie,
					title: movie.title.toUpperCase(),
				};
			});

			return modifiedMovieList;
		},
	},
	data() {
		return {
			favoriteMovie: null,
			pageTitle: "Movies",
			buttonText: null,
			sliderType: "sliderSmall",
			pageSubtitle: "List of Movies",
			movieList: [
				{
					title: "Spiderman 4",
					year: 2020,
					image: "https://i.blogs.es/4d5a9c/spiderman-4/1366_521.jpeg",
				},
				{
					title: "Avengers End Game",
					year: 2018,
					image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
				},
				{
					title: "Batman vs Superman",
					year: 2015,
					image: "https://cinepremiere.com.mx/wp-content/uploads/2016/03/batman-vs-superman-critica.jpg",
				},
				{
					title: "Monsters Inc",
					year: 2012,
					image: "https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt2975c13bc160bfa8/64f87c17f5f25f0b72ccc13f/MonstersInc.jpg",
				},
			],
		};
	},
};
</script>
