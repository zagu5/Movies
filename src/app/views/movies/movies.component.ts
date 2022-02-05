import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieList: Array<object> =[];

  constructor(private movieService: MoviesService) {
    movieService.getList().subscribe((response: any) => {
      console.log(response)
      this.movieList = response.results;
     });
   }

  ngOnInit(): void {
  }

}
