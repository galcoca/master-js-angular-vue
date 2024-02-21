<template>
	<div id="content" className="error404">
		<div className="errorImage">
			<img src="../../assets/images/404error.png" alt="404Error" />
		</div>
		<div>
			<h1 className="subHeader">404 Page Not Found</h1>
			<p>
				The page you are looking for doesn't exists, please try again
				later
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "ErrorComponent"
};
</script>
