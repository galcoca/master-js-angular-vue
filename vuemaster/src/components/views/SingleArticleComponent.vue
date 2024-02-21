<template>
	<SliderComponent />
	<div class="center">
		<section id="content">
			<article class="articleItem articleDetail" v-if="article != null">
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
				<h1 class="subHeader">{{ article.title }}</h1>
				<span class="date">
					{{ dateFormat(article.date) }}
				</span>
				<p>{{ article.content }}</p>

				<div className="buttons">
					<router-link
						:to="{ name: 'modify', params: { id: article._id } }"
						class="btnWarning btnSmall"
						>Edit</router-link
					>
					<button
						className="btnSmall btnDanger"
						@click="handleDelete(article._id)"
					>
						Delete
					</button>
				</div>
				<div class="clearfix"></div>
			</article>
		</section>
		<SidebarComponent />
		<div class="clearfix"></div>
	</div>
</template>

<script>
import SliderComponent from "../templates/SliderComponent.vue";
import SidebarComponent from "../templates/SidebarComponent.vue";
import { Global } from "@/Global";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

export default {
	name: "SingleArticleComponent",
	components: {
		SliderComponent,
		SidebarComponent,
	},
	data() {
		return {
			templateURL: Global.url,
			article: null,
		};
	},
	mounted() {
		const articleId = this.$route.params.id;
		this.getArticle(articleId);
	},
	methods: {
		dateFormat(value) {
			return moment(value).fromNow();
		},
		getArticle(articleId) {
			let axiosURL = this.templateURL + "article/" + articleId;
			axios
				.get(axiosURL)
				.then((response) => {
					if (response.data.status == "success") {
						this.article = response.data.article;
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		handleDelete(articleId) {
			let axiosURL = this.templateURL + "article/" + articleId;
			Swal.fire({
				title: "Confirmation",
				text: "Are you sure you want to delete this article?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, delete it",
				cancelButtonText: "Cancel",
			}).then((result) => {
				if (result.isConfirmed) {
					axios
						.delete(axiosURL)
						.then(() => {
							Swal.fire({
								title: "Success",
								text: "Article deleted successfully",
								icon: "success",
								confirmButtonText: "OK",
							}).then(() => {
								this.$router.push("/blog");
							});
						})
						.catch(() => {
							Swal.fire({
								icon: "error",
								title: "Error",
								text: "There is an error deleting the article",
							}).then(() => {
								this.$router.push("/blog");
							});
						});
				}
			});
		},
	},
};
</script>
