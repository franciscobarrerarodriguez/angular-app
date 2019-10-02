import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // new google.maps.Map(document.getElementById('map'), {
      //   center: {lat: -34.397, lng: 150.644},
      //   zoom: 8
      // });
  }

}
