import { Component, OnInit } from '@angular/core';
import { faCoffee, faMapPin, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.scss']
})
export class OrderCreationComponent implements OnInit {

  public faCoffee = faCoffee;
  public faMapPin = faMapPin;
  public faStar = faStar;
  public faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit() {
  }

}
