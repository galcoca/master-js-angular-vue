import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
	selector: 'appBlog',
	templateUrl: './blog.component.html',
	styleUrl: './blog.component.css',
	providers: [ArticleService]
})
export class BlogComponent implements OnInit {
	public homeText = 'Blog'

	public articles: Article[];
	public url: string;

	constructor(
		private _articleService: ArticleService
	){
		this.url = Global.url;
		this.articles = [];
	}

	ngOnInit(): void{
		this._articleService.getArticles().subscribe({
			next: response => {
				if(response.articles){
					this.articles = response.articles;
				}
			},
			error: error => console.log("error",error),
		});
	}
}
