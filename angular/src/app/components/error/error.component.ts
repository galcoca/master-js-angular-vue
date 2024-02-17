import { Component, Input } from '@angular/core';

@Component({
	selector: 'appError',
	templateUrl: './error.component.html',
	styleUrl: './error.component.css'
})
export class ErrorComponent {
	@Input() typeError: string;
	@Input() errorTitle: string;
	@Input() errorContent: string;

	constructor(){
		this.typeError = 'default';
		this.errorTitle = '';
		this.errorContent = '';
	}
}
