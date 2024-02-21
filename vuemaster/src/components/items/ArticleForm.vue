<template>
	<Form class="midForm" @submit="submitArticleForm">
		<div class="formGroup">
			<label htmlFor="title">Title</label>
			<Field
				name="title"
				id="title"
				as="input"
				rules="required|min:3"
				type="text"
				v-model="theArticle.title"
			/>
			<ErrorMessage name="title" as="p" />
		</div>

		<div class="formGroup">
			<label htmlFor="content">Content</label>
			<Field
				name="content"
				as="textarea"
				rules="required|min:10"
				v-model="theArticle.content"
			/>
			<ErrorMessage name="content" as="p" />
		</div>
		<div v-if="isEditing">
			<div v-if="theArticle.image">
				<h2 class="subHeader">Image Preview</h2>
				<div>
					<h3>Image Selected</h3>
					<div class="imageWrap">
						<img
							class="imagePreview"
							:alt="theArticle.title"
							:src="templateURL + 'image/' + theArticle.image"
						/>
					</div>
				</div>
			</div>
			<div v-else>
				<h3>No image has been saved for this article</h3>
			</div>
		</div>
		<div class="formGroup">
			<h2 v-if="theArticle.image" className="subHeader">Change Image</h2>
			<h2 v-else className="subHeader">Select Image</h2>
			<label htmlFor="file0">Image</label>
			<Field
				name="file0"
				id="file0"
				as="input"
				type="file"
				@change="handleImageChange($event)"
			/>
		</div>
		<div class="formGroup"></div>

		<div class="clearfix"></div>

		<input
			type="submit"
			value="Save"
			class="btn btnSuccess"
			@click="validate"
		/>
	</Form>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import ArticleModel from "../../models/ArticleModel";
import axios from "axios";
import { Global } from "@/Global";
import Swal from "sweetalert2";

defineRule("required", (value) => {
	if (!value || !value.length) {
		return "This field is required";
	}
	return true;
});

defineRule("min", (value, [limit]) => {
	if (!value || !value.length) {
		return true;
	}
	if (value.length < limit) {
		return `This field must be at least ${limit} characters`;
	}
	return true;
});

export default {
	name: "ArticleForm",
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		return {
			theArticle: new ArticleModel("", "", null, ""),
			templateURL: Global.url,
			file: null,
			isEditing: false,
		};
	},
	mounted() {
		const articleId = this.$route.params.id;
		if (articleId) {
			this.articleID = articleId;
			this.isEditing = true;
			this.getArticle(this.articleID);
		}
	},
	methods: {
		handleImageChange(event) {
			this.file = event.target.files[0];
		},
		submitArticleForm() {
			const axiosURL = this.isEditing
				? `${this.templateURL}article/${this.articleID}${
						this.file && this.file.name !== this.theArticle.image
							? `/${this.theArticle.image}`
							: ""
				}`
				: `${this.templateURL}save`;

			const formData = new FormData();
			if (this.file && this.file.name) {
				formData.append("file0", this.file, this.file.name);
			}

			axios
				.request({
					url: axiosURL,
					method: this.isEditing ? "put" : "post",
					data: this.theArticle,
				})
				.then((response) => {
					if (response.data.status === "success") {
						const articleId = response.data.article._id;
						if (this.file && this.file.name) {
							return axios.post(
								`${this.templateURL}uploadimage/${articleId}`,
								formData
							);
						} else {
							Swal.fire({
								icon: "success",
								title: this.isEditing
									? "Article Updated"
									: "Article Saved",
								text: this.isEditing
									? "The article has been updated successfully."
									: "The article has been saved successfully.",
							}).then(() => {
								this.$router.push(
									this.isEditing
										? `/article/${articleId}`
										: "/blog"
								);
							});
						}
					}
				})
				.then((response) => {
                    if (response && response.data.status === "success") {
                        const articleId = response.data.article._id;
						Swal.fire({
							icon: "success",
							title: this.isEditing
								? "Article Updated"
								: "Article Saved",
							text: this.isEditing
								? "The article has been updated successfully."
								: "The article has been saved successfully.",
						}).then(() => {
							this.$router.push(
								this.isEditing
									? `/article/${articleId}`
									: "/blog"
							);
						});
					}
				})
				.catch(() => {
					Swal.fire({
						icon: "error",
						title: "Error",
						text: this.isEditing
							? "An error occurred while saving the article."
							: "The article has been created but, an error occurred while saving the image of the article.",
					}).then(() => {
						this.$router.push("/blog");
					});
				});
		},
		getArticle(articleID) {
			let axiosURL = this.templateURL + "article/" + articleID;
			axios
				.get(axiosURL)
				.then((response) => {
					if (response.data.status == "success") {
						this.theArticle = response.data.article;
					}
				})
				.catch(() => {
					Swal.fire({
						icon: "error",
						title: "Error",
						text: "Unable to find the article.",
					}).then(() => {
						this.$router.push("/blog");
					});
				});
		},
	},
};
</script>