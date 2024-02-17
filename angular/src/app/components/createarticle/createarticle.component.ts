import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader-next';
import { Global } from '../../services/global';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-createarticle',
	templateUrl: './createarticle.component.html',
	styleUrl: './createarticle.component.css',
	providers: [ArticleService]
})
export class CreateArticleComponent {
	public homeText = 'Create Article';
	public subHeader = 'Fill the fields to create an article';
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
		this.isEdit = false;
		this.field = '';
		this.imageData = '';
		this.status = '';
		this.article = new Article('','','','','');
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
		fieldName: 'file0'
	};

	onSubmit(){
		this._articleService.createArticle(this.article).subscribe({
			next: response => {
				if(response.status){
					this.status = 'success';
					this.article = response.article;

					Swal.fire({
						title: 'Article Created',
						text: 'The article has been created correctly with the title ' + this.article.title,
						icon: 'success',
						confirmButtonText: 'Continue'
					});

					this._router.navigate(['/blog']);
				} else {
					this.status = 'error';
				}
			},
			error: error => {
				console.log("error",error);
				this.status = 'error';
			},
		});
  	}

	imageUpload(file: FileQueueObject) {
		if(file.response instanceof HttpResponse){
			let imageData = file.response.body.image
			this.article.image = imageData;
		} else {
			file.response.error;
		}
	}
}
