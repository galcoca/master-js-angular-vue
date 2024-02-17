import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'appMovie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent {

  @Input() movie!: Movie;
  @Input() index:number=0;

  @Output() markFavorite = new EventEmitter();

  constructor(){
  }

  selectFavorite(event: Event,movie: Movie){
    this.markFavorite.emit({
      movie: movie
    });
  }

}
