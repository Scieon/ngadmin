import { Component } from '@angular/core';

// Some service

@Component({
  selector: 'nga-merchant-property',
  templateUrl: 'property.html',
  styleUrls: ['./property.scss'],
})
export class PropertyComponent {

  // Some data
  merchantId: number;

  constructor() {

  }
}
