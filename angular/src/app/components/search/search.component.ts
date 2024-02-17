import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrl: './search.component.css',
	providers: [ArticleService]

})
export class SearchComponent implements OnInit {
	public homeText = 'Search Results'
	public articles: Article[];
	public templateURL:string;
	public searchString:string;

	constructor(
		private _articleService: ArticleService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.templateURL = Global.url;
		this.articles = [];
		this.searchString = '';
	}

	ngOnInit(): void{
		this._route.params.subscribe(params => {
			this.searchString = params['search'];
			this._articleService.search(this.searchString).subscribe({
				next: response => {
					if(response.articles){
						this.articles = response.articles;
					} else {
						this.articles = [];
					}
				},
				error: error => {
					this.articles = [];
					console.log("error",error);
				}
			});
		})
	}
}
