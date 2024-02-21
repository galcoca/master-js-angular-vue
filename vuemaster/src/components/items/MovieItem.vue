<template>
	<article class="articleItem">
		<div class="imageWrap">
			<img :src="movie.image" :alt="movie.title" :title="movie.title" />
		</div>

		<h2>{{ movie.title }}</h2>
		<span
			class="date"
			:class="{
				yearGreen: movie.year >= 2016,
				yearRed: movie.year < 2016,
			}"
		>
			{{ movie.year }}
		</span>
		<a href="#">Read More</a>

		<input type="button" value="Mark as Favorite" @click="sendFavorite(movie)"/>

		<div class="clearfix"></div>
	</article>
</template>

<script>
export default {
	name: 'MovieItem',
	props: ['movie'],
	methods: {
		sendFavorite(favoriteMovie) {
			this.$emit('favoriteMovie', favoriteMovie);
		}
	}
};
</script>
