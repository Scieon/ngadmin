import { Component, Input } from '@angular/core';

// Some service

@Component({
  selector: 'nga-merchant-content',
  templateUrl: 'content.html',
  styleUrls: ['./content.scss'],
})
export class ContentComponent {

  // Some data
  showMore: boolean;
  @Input() expanded: boolean;

  constructor() {
    this.showMore = false;
    this.expanded = true;

  }
}
