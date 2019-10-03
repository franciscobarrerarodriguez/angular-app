import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.scss']
})
export class OrderCreationComponent implements OnInit {

  @Input()
  set setLocation(location: any) {
    if (!isUndefined(location)) {
      this.location = location;
      this.changeAddress();
    }
  }

  public formOrder: FormGroup;
  public location: any;
  private loading: boolean = true;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private changeAddress(): void {
    this.loading = false;
    this.formOrder.controls['address'].setValue(this.location.address);
  }

  private initForm(): void {
    this.formOrder = new FormGroup({
      address: new FormControl()
    });
  }

}
