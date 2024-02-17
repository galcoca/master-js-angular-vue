import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'appSidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
	public searchString: string;

    constructor (
		private _router: Router,
		private _route: ActivatedRoute
	) {
		this.searchString = '';
    }

    onSubmit(){
		this._router.navigate(['/search',this.searchString])
  	}

}
