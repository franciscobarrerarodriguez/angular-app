/// <reference types="@types/googlemaps"/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const { Map, ControlPosition } = google.maps;
    const mapOptions = {
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      zoomControlOptions: {
        position: ControlPosition.TOP_LEFT
      },
      zoomControl: true,
      noClear: true,
      zoom: 11
    }
    ;
    // const localMap = new Map(document.getElementById('map'), mapOptions);
      new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
  }

}
