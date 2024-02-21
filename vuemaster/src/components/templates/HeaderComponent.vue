<template>
	<header id="header">
		<div class="center">
			<!--logo-->
			<div id="logo">
				<img src="../../assets/images/vue.svg" alt="appLogo"/>
				<span id="brand"> <strong>Curso</strong>Vue </span>
			</div>

			<!--Nav-->
			<nav id="menu">
				<ul>
					<li>
						<router-link active-class="active" to="/">Home</router-link>
					</li>
					<li>
						<router-link active-class="active" to="/blog">Blog</router-link>
					</li>
					<li>
						<router-link active-class="active" to="/form">Form</router-link>
					</li>
					<li>
						<router-link active-class="active" to="/movies">Movies</router-link>
					</li>
					<li>
						<router-link active-class="active" to="/testpage">Test</router-link>
					</li>
				</ul>
			</nav>

			<div class="clearfix"></div>
		</div>
	</header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>
