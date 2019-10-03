/// <reference types="@types/googlemaps"/>
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import Map = google.maps.Map;
import Geocoder = google.maps.Geocoder;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  private location: any;
  private currentPosition: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private map: Map;

  constructor() { }

  ngOnInit() {
    this.getCurrentPosition();

    this.getCurrentPosition$
      .pipe(filter(location => location !== null), take(1))
      .subscribe(location => {
        this.initMap(location);
        this.location = location;
      });
  }

  private initMap(location: any): void { // TODO: Move to helper
    this.map = new Map(document.getElementById('map'), {
      center: location,
      zoom: 17,
      mapTypeControl: false
    });
  }

  private getCurrentPosition(): void { // TODO: Move to helper
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition => {
        const location = {
          lat: currentPosition.coords.latitude,
          lng: currentPosition.coords.longitude
        };
        const geocoder = new Geocoder;
        geocoder.geocode({ location }, (results, status) => {
          if (String(status) === 'OK') {
            this.currentPosition.next({ ...location, address: results[0].formatted_address });
          }
        });
      });
    } else {
      console.error(`Browser doesn't support geolocation`);
    }
  }

  get getCurrentPosition$(): Observable<any> { // TODO: Move to helper
    return this.currentPosition;
  }

}
