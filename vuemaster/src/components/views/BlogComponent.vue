<template>
    <SliderComponent :pageTitle="pageTitle" :buttonText="buttonText" :sliderType="sliderType"/>
	<div className="center">
		<section id="content">
		<h2 class="subHeader">{{ pageSubtitle }}</h2>

		<div id="articles">
			<ArticlesComponent :homepage="false"/>
		</div>
	</section>
		<SidebarComponent :showCreate="showCreate"/>
		<div class="clearfix"></div>
	</div>
</template>

<script>
import SliderComponent from "../templates/SliderComponent.vue"
import SidebarComponent from "../templates/SidebarComponent.vue"
import ArticlesComponent from "./ArticlesComponent.vue";

export default {
	name: "BlogComponent",
	components: {
		SliderComponent,
		SidebarComponent,
		ArticlesComponent
	},
	data() {
		return {
			pageTitle: "Blog",
			buttonText: null,
			pageSubtitle: "List of Articles",
			sliderType: "sliderSmall",
			showCreate: true
		};
	}
};
</script>
