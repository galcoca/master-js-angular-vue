<template>
	<div id="slider" :class="sliderType" v-if="pageTitle">
		<h1>{{pageTitle}}</h1>
		<router-link to="/blog" class="btnWhite" v-if="buttonText">{{buttonText}}</router-link>
	</div>
</template>

<script>
    export default { 
		name: "SliderComponent",
		props: ['sliderType','buttonText','pageTitle']
	};
</script>
