import { Component, OnInit } from '@angular/core';
import { LocationsService } from './locations.service'
import { Locations } from './locations'
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  providers: [LocationsService],
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor(private locationsService: LocationsService) { }
  locations : Locations[];
  ngOnInit() {
    this.getAllLocations();
  }

  getAllLocations(){
    this.locationsService.getAllLocations().subscribe(
      (locations) => this.locations = locations
    )
  }
}
