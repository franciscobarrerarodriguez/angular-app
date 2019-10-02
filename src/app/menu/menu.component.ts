import { Component, OnInit } from '@angular/core';
import { menuLeftList } from './entities/menuEntities';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuList = menuLeftList;

  constructor() { }

  ngOnInit() {}

}
