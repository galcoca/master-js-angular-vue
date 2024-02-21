<template>
	<article class="articleItem">
		<div class="imageWrap">
			<img
				v-if="article.image"
				:src="templateURL + 'image/' + article.image"
				:alt="article.title"
			/>
			<img
				v-else
				src="https://placehold.co/1000x400"
				:alt="article.title"
			/>
		</div>

		<h2>
			<router-link :to="{ name: 'article', params: { id: article._id } }">
				{{ article.title }}
			</router-link>
		</h2>
		<span class="date">
			{{ dateFormat(article.date) }}
		</span>
		<router-link :to="{ name: 'article', params: { id: article._id } }">
			Read More...
		</router-link>
		<div class="clearfix"></div>
	</article>
</template>

<script>
import { Global } from "../../Global";
import moment from "moment";

export default {
	name: "ArticleItem",
	props: ["article"],
	data() {
		return {
			templateURL: Global.url,
		};
	},
	methods: {
		dateFormat(value) {
			return moment(value).fromNow();
		},
	},
};
</script>
