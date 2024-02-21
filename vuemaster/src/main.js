import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import ErrorComponent from './components/templates/ErrorComponent.vue'
import RedirectComponent from './components/templates/RedirectComponent.vue'
import HomeComponent from './components/views/HomeComponent.vue'
import BlogComponent from './components/views/BlogComponent.vue'
import FormComponent from './components/views/FormComponent.vue'
import SearchComponent from './components/views/SearchComponent.vue'
import TestComponent from './components/views/TestComponent.vue'
import MoviesComponent from './components/views/MoviesComponent.vue'
import SingleArticleComponent from './components/views/SingleArticleComponent.vue'
import EditArticleComponent from './components/views/EditArticleComponent.vue'
import CreateArticleComponent from './components/views/CreateArticleComponent.vue'

const routes = [
    { path: "/home", component: HomeComponent },
    { path: "/", component: HomeComponent },
    { path: "/blog", component: BlogComponent },
    { path: "/form", component: FormComponent },
    { path: "/search/:searchString", component: SearchComponent },
    { path: "/redirect/:searchString", component: RedirectComponent },
    { path: "/testpage", component: TestComponent },
    { path: "/movies", component: MoviesComponent },
    { path: "/article/:id", name: 'article', component: SingleArticleComponent },
    { path: "/article/create", component: CreateArticleComponent },
    { path: "/article/modify/:id", name: 'modify', component: EditArticleComponent },
    { path: '/:pathMatch(.*)*', component: ErrorComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.config.devtools = false;
app.use(router);
app.mount('#app')