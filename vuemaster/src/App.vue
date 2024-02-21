<template>
	<HeaderComponent />
	<router-view/>
	<FooterComponent />
</template>

<script>
import HeaderComponent from "./components/templates/HeaderComponent.vue"
import FooterComponent from "./components/templates/FooterComponent.vue"

export default {
	name: "App",
	components: {
		HeaderComponent,
		FooterComponent
	},
};
</script>

<style>
	@import url("./assets/css/main.css");
	@import url("./assets/css/header.css");
	@import url("./assets/css/footer.css");
	@import url("./assets/css/form.css");
</style>
