import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.scss']
})
export class OrderCreationComponent implements OnInit {

  public faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
