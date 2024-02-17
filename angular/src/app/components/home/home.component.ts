import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  	selector: 'appHome',
  	templateUrl: './home.component.html',
  	styleUrl: './home.component.css',
	providers: [ArticleService]
})
export class HomeComponent implements OnInit {
	public homeText = 'Welcome to the Master: Angular'
	public articles: Article[];

	constructor(
		private _articleService: ArticleService
	){
		this.articles = [];
	}

  	ngOnInit(): void{
		this._articleService.getArticles(true).subscribe({
			next: response => {
				if(response.articles){
					this.articles = response.articles;
				}
			},
			error: error => console.log("error",error),
		});
	}
}
