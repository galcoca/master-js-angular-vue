<template>
	<section id="articlesComponent">
		<div v-if="articles && articles.length >= 1">
			<div v-for="article in articles" :key="article._id">
				<ArticleItem :article="article" />
			</div>
		</div>
		<div v-else-if="articles && articles.length <= 1">
			No articles to show...
		</div>
		<div v-else>
			Loading...
		</div>
	</section>
</template>

<script>
import ArticleItem from "../items/ArticleItem.vue";
import { Global } from '../../Global'
import axios from 'axios'

export default {
	name: "ArticlesComponent",
	props: ["homepage"],
	components: {
		ArticleItem
	},
	data() {
		return {
			articles: []
		};
	},
	mounted() {
		this.getArticles();
	},
	methods: {
		getArticles(){
			let axiosURL = Global.url+'articles';
			if(this.homepage === true){
				axiosURL = Global.url+'articles/true';
			}
			axios
				.get(axiosURL)
				.then( response => {
					if(response.data.status == "success"){
						this.articles = response.data.articles;
					}
				})
				.catch( error => {
					console.log(error);
				});
		}
	}
};
</script>
