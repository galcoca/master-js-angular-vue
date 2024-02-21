<template>
	<SliderComponent />
	<div class="center">
		<section id="content">
			<h1 class="subHeader">{{ pageSubtitle }}</h1>
            <ArticleForm/>
		</section>
		<SidebarComponent/>
        <div class="clearfix"></div>
	</div>
</template>

<script>
import SliderComponent from "../templates/SliderComponent.vue";
import SidebarComponent from "../templates/SidebarComponent.vue";
import ArticleForm from "../items/ArticleForm.vue";

export default {
	name: "CreateArticleComponent",
	components: {
		SliderComponent,
		SidebarComponent,
		ArticleForm
	},
	data() {
		return {
			pageSubtitle: "Edit Article"
		};
	}
};
</script>