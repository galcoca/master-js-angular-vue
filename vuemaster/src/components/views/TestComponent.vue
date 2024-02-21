<template>
    <SliderComponent :pageTitle="pageTitle" :buttonText="buttonText" :sliderType="sliderType"/>
	<div className="center">
        <section id="content">
            <h2 class="subHeader">{{ pageSubtitle }}</h2>
            <h3>{{ idFromURL }}</h3>
            <button @click="updateName()">Update Name</button>
            <button @click="redirectionBlog()">Go to Blog</button>
            <h4>{{ name }}</h4>
            <h3>{{ subtitle }}</h3>
            <hr />

            <h2 class="subHeader">Reactivity</h2>
            <input type="text" v-model="name" />
            My name is: <strong>{{ name }}</strong>

            <h2 class="subHeader">Conditional Directives</h2>
            <input type="number" v-model="age" />
            My age is: <strong>{{ age }}</strong>

            <p class="colorDanger" v-if="age && age >= 30 && age < 65">
                Hello, you have 30 years or more
            </p>
            <p class="colorPurple" v-else-if="age && age >= 65">
                Hello, you have 65 years or more
            </p>
            <p class="colorSuccess" v-else>Hello, you have 29 years or less</p>

            <h2 class="subHeader">Itreative Directives</h2>

            <ul class="movieList" v-for="moviedata in movieList" :key="moviedata.title">
                <li>{{ moviedata.title }}</li>
                <li>{{ moviedata.year }}</li>
                <li><img :src=moviedata.image :alt="moviedata.title" class="movieImage"></li>
            </ul>
        </section>
		<SidebarComponent />
		<div class="clearfix"></div>
	</div>
</template>

<script>
import SliderComponent from "../templates/SliderComponent.vue"
import SidebarComponent from "../templates/SidebarComponent.vue"

export default {
	components: {
		SliderComponent,
		SidebarComponent
	},
    created() {
        console.log("Component created");
    },
    mounted() {
        console.log("Component mounted");
    },
    updated() {
        console.log("Component updated");
    },
    unmounted() {
        console.log("Component destroyed");
    },
	data() {
		return {
            pageTitle: "Test Page",
			pageSubtitle: "Test Component",
            buttonText: null,
			sliderType: "sliderSmall",
            idFromURL: null,
            name: "Gabriel",
            subtitle: "This is the subtitle",
			age: 29,
            movieList: [
                {title: 'Spiderman 4', year: 2020, image: 'https://i.blogs.es/4d5a9c/spiderman-4/1366_521.jpeg'},
                {title: 'Avengers End Game', year: 2018, image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp'},
                {title: 'Batman vs Superman', year: 2015, image: 'https://cinepremiere.com.mx/wp-content/uploads/2016/03/batman-vs-superman-critica.jpg'},
                {title: 'Monsters Inc', year: 2012, image: 'https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt2975c13bc160bfa8/64f87c17f5f25f0b72ccc13f/MonstersInc.jpg'},
            ]
		};
	},
    methods: {
        updateName() {
            this.name = "Gabriel Corredor";
            console.log(this.name);
        }, 
        redirectionBlog() {
            this.$router.push('/blog');
        }
    }
};
</script>

<style>
.colorDanger {
	color: red;
	font-weight: bold;
}
.colorSuccess {
	color: green;
	font-weight: bold;
}
.colorPurple {
	color: purple;
	font-weight: bold;
}
.movieImage {
    max-width: 40%;
}
.movieList {
    list-style: none;
}
</style>