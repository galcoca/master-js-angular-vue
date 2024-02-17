import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
	selector: 'appArticle',
	templateUrl: './article.component.html',
	styleUrl: './article.component.css',
	providers: [ArticleService]
})

export class ArticleComponent implements OnInit{
	public homeText: string;
	public article = {_id: '',     title: '',     content: '',     image: '',     date: ''};
	public URLTemplate:string;
	
	constructor(
		private _articleService: ArticleService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.homeText = 'Blog';
		this.URLTemplate = Global.url;
	}

	ngOnInit(): void {

		this._route.params.subscribe(params => {
			let articleId = params['id'];
			this._articleService.getArticle(articleId).subscribe({
				next: response => {
					if(response.article){
						this.article = response.article;
					} else {
						this._router.navigate(['/home']);
					}
				},
				error: error => {
					console.log("error",error);
					this._router.navigate(['/home']);
				}
			});
		})

	}

	deleteArticle(id:string){
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		  }).then((result) => {
			if (result.isConfirmed) {
				this._articleService.deleteArticle(id).subscribe({
					next: response => {
						Swal.fire({
							title: "Deleted!",
							text: "Your article has been deleted.",
							icon: "success"
						  });
						this._router.navigate(['/blog']);
					},
					error: error => {
						console.log("error",error);
						this._router.navigate(['/blog/article/', this.article._id]);
					}
				});
			}
		  });
	}

}
