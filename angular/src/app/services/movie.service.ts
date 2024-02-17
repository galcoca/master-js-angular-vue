import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";

@Injectable() 
export class MovieService {

    public movies: Movie[];

    constructor() {
        this.movies = [
            new Movie('Spiderman 4', 2020, 'https://i.blogs.es/4d5a9c/spiderman-4/1366_521.jpeg'),
            new Movie('Avengers End Game',2018,'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp'),
            new Movie('Batman vs Superman',2015,'https://cinepremiere.com.mx/wp-content/uploads/2016/03/batman-vs-superman-critica.jpg'),
            new Movie('Monsters Inc',2012,'https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt2975c13bc160bfa8/64f87c17f5f25f0b72ccc13f/MonstersInc.jpg'),
        ];
    }

    getMovies() {
        return this.movies
    }

}