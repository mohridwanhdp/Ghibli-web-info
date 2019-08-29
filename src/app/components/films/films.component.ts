import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service'
import { Films } from './films'
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  providers: [FilmsService],
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor(private filmsService: FilmsService) { }
  films : Films[];
  ngOnInit() {
    this.getAllFilms();
  }

  getAllFilms(){
    // this.films = this.filmsService.getAllFilms();
    this.filmsService.getAllFilms()
    .subscribe(films => (this.films = films));
  }
}
