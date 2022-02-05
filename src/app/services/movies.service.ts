import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  //movieList: Array<any> = []

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=3d3f287eb1b22b974d0543316391e603')
  }
}
