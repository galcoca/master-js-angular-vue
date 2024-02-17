import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormComponent } from "./components/form/form.component";
import { PageComponent } from "./components/page/page.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { CreateArticleComponent } from './components/createarticle/createarticle.component';
import { EditArticleComponent } from './components/editarticle/editarticle.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:id', component: ArticleComponent},
    {path: 'article/create', component: CreateArticleComponent},
    {path: 'article/edit/:id', component: EditArticleComponent},
    {path: 'search/:search', component: SearchComponent},
    {path: 'form', component: FormComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'testpage', component: PageComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
