<template>
	<SliderComponent
		:pageTitle="pageTitle"
		:buttonText="buttonText"
		:sliderType="sliderType"
	/>
	<div className="center">
		<section id="content">
			<h2 class="subHeader">{{ pageSubtitle }}</h2>

			<div id="articles">
				<ArticlesComponent :homepage="true" />
			</div>
		</section>
		<SidebarComponent />
		<div class="clearfix"></div>
	</div>
</template>

<script>
import SliderComponent from "../templates/SliderComponent.vue"
import SidebarComponent from "../templates/SidebarComponent.vue"
import ArticlesComponent from "./ArticlesComponent.vue";


export default {
	name: "HomeComponent",
	components: {
		SliderComponent,
		SidebarComponent,
		ArticlesComponent
	},
	data() {
		return {
			pageTitle: "Master JS: Vue",
			pageSubtitle: "Last Articles",
			buttonText: "Check Blog",
			sliderType: "sliderBig",
		};
	}
};
</script>
