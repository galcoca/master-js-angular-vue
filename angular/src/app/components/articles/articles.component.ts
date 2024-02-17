import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
	selector: 'appArticles',
	templateUrl: './articles.component.html',
	styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
	public url:string;
	@Input() articles: Article[];

	constructor () {
		this.url = Global.url;
		this.articles = [];
	}

	ngOnInit(): void {
		
	}
}
