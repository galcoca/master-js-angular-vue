import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
	selector: 'appMovies',
	templateUrl: './movies.component.html',
	styleUrl: './movies.component.css',
	providers: [MovieService]
})
export class MoviesComponent {
	public homeText = 'Movies';
	public index: number = 0;
	public favorite: Movie;
	public dateShow: any;
    public movies: Movie[];

	constructor(
		private _movieService: MovieService
	) {
		this.favorite = new Movie('', 0, '');
		this.dateShow = new Date(2020, 8, 12);
		this.movies = this._movieService.getMovies();
	}

	showFavorite(event: any) {
		this.favorite = event.movie;
	}
}
