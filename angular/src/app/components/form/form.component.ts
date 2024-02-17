import { Component } from '@angular/core';

@Component({
  	selector: 'appForm',
  	templateUrl: './form.component.html',
  	styleUrl: './form.component.css',
})

export class FormComponent {
  	public homeText = 'Form';
  	public user: any;
	public field: string;

  	constructor() {
		this.field = '';
		this.user = {
			firstname: '',
			lastname: '',
			bio: '',
			gender: '',
		};
  	}

	onSubmit(){
		console.log(this.user);
  	}

	clickedButton(){
		console.log('Clicked Button');
	}

	hasExit(){
		console.log('Has exit the input');
	}

}
