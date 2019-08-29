import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from 'src/app/components/people/people.component';
import { LocationsComponent } from 'src/app/components/locations/locations.component';

const routes: Routes = [
  {path : '', component : HomeComponent },
  {path : 'films', component : FilmsComponent },  
  {path : 'people', component : PeopleComponent },
  {path : 'locations', component : LocationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
