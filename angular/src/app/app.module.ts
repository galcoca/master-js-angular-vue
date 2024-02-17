import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { AppRoutingModule } from './app-routing.module';
import { ImageUploaderModule } from 'ngx-image-uploader-next';

import { AppComponent } from './components/main/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { BlogComponent } from './components/blog/blog.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ErrorComponent } from './components/error/error.component';
import { MovieComponent } from './components/movie/movie.component';
import { ArticlesComponent } from './components/articles/articles.component';

import { IsPairPipe } from './pipes/ispair.pipe';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { CreateArticleComponent } from './components/createarticle/createarticle.component';
import { EditArticleComponent } from './components/editarticle/editarticle.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SliderComponent,
		SidebarComponent,
		FooterComponent,
		HomeComponent,
		FormComponent,
		PageComponent,
		BlogComponent,
		MoviesComponent,
		ErrorComponent,
		MovieComponent,
		IsPairPipe,
		ArticlesComponent,
		ArticleComponent,
		SearchComponent,
		CreateArticleComponent,
  		EditArticleComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		MomentModule,
		ImageUploaderModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
