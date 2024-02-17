import { Component, Input } from '@angular/core';

@Component({
	selector: 'appSlider',
	templateUrl: './slider.component.html',
	styleUrl: './slider.component.css'
})
export class SliderComponent {
	@Input() pageTitle: string;
	@Input() size: string;

	constructor(){
		this.pageTitle = ""
		this.size = ""
	}
}
