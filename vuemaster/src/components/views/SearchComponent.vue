<template>
	<SliderComponent
		:pageTitle="pageTitle+searchString"
		:buttonText="buttonText"
		:sliderType="sliderType"
	/>
	<div className="center">
		<section id="content">
			<div id="articles">
				<div v-if="articles && articles.length >= 1">
					<h2 class="subHeader">{{ pageSubtitle }}</h2>
					<div v-for="article in articles" :key="article._id">
						<ArticleItem :article="article" />
					</div>
				</div>
				<div v-else-if="articles && articles.length <= 1">
					<h2 class="subHeader">
						No articles that match your search...
					</h2>
				</div>
				<div v-else>
					<p>
						<strong>Loading...</strong>
					</p>
				</div>
			</div>
		</section>
		<SidebarComponent />
		<div class="clearfix"></div>
	</div>
</template>

<script>
import SliderComponent from "../templates/SliderComponent.vue";
import SidebarComponent from "../templates/SidebarComponent.vue";
import ArticleItem from "../items/ArticleItem.vue";
import { Global } from '../../Global'
import axios from "axios";

export default {
	name: "SearchComponent",
	components: {
		SliderComponent,
		SidebarComponent,
		ArticleItem
	},
	mounted() {
		this.searchString = this.$route.params.searchString;
		this.getArticlesBySearch(this.searchString);
	},
	data() {
		return {
			searchString: "",
			pageSubtitle: "We found these articles...",
			pageTitle: "Search Results for: ",
			sliderType: "sliderSmall",
			articles: []
		};
	},
	methods: {
		getArticlesBySearch(searchString){
			let axiosURL = Global.url+'search/'+searchString;
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
