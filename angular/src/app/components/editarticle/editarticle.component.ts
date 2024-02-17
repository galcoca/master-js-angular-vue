import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader-next';
import { Global } from '../../services/global';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-editarticle',
	templateUrl: '../createarticle/createarticle.component.html',
	styleUrl: './editarticle.component.css',
	providers: [ArticleService],
})
export class EditArticleComponent implements OnInit {
	public subHeader = 'Modify the fields of the article';
	public homeText = 'Edit Article';
	public article: Article;
	public field: string;
	public status: string;
	public imageData: any;
	public isEdit: boolean;
	public URLTemplate:string;

	constructor(
		private _articleService: ArticleService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		this.isEdit = true;
		this.field = '';
		this.imageData = '';
		this.status = '';
		this.article = new Article('', '', '', '', '');
		this.URLTemplate = Global.url;
	}

	public options: ImageUploaderOptions = {
		thumbnailHeight: 150,
		thumbnailWidth: 410,
		uploadUrl: Global.url + 'uploadimage/',
		allowedImageTypes: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
		maxImageSize: 50,
		autoUpload: false,
		cropAspectRatio: 1,
		fieldName: 'file0',
	};

	ngOnInit(): void {
		this.getArticle();
	}

	onSubmit() {
		this._articleService.updateArticle(this.article._id, this.article).subscribe({
			next: (response) => {
				console.log(response);
				console.log(response.article);
				if (response.status) {
					this.status = 'success';
					this.article = response.article;
					Swal.fire({
						title: 'Article Modified',
						text: 'The article has been modified correctly',
						icon: 'success',
						confirmButtonText: 'Continue'
					});

					this._router.navigate(['/blog/article/', this.article._id]);
				} else {
					this.status = 'error';
				}
			},
			error: (error) => {
				console.log('error', error);
				Swal.fire({
					title: 'Error Modifiying the Article',
					text: 'An error has been occur, please try again',
					icon: 'error',
					confirmButtonText: 'Continue'
				});
			},
		});
	}

	imageUpload(file: FileQueueObject) {
		if (file.response instanceof HttpResponse) {
			let imageData = file.response.body.image;
			this.article.image = imageData;
		} else {
			file.response.error;
		}
	}

	getArticle(){
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
}
