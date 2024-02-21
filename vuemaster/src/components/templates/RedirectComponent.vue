<template>
    <h1>Redirecting...</h1>
</template>

<script>
export default {
    name: 'RedirectComponent',
    mounted() {
        let searchString = this.$route.params.searchString;
        this.$router.push('/search/'+searchString);
    }
}
</script>