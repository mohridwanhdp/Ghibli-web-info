import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service'
import { People } from './people'
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  providers: [PeopleService],
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }
  people : People[];
  
  ngOnInit() {
    this.getAllPeople();
  }

  getAllPeople(){
    this.peopleService.getAllPeople().subscribe(
        (people) => this.people = people
    );
  }
}
