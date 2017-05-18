import { Component } from '@angular/core';
import {HistoryService} from "./history.service";

// Some service

@Component({
  selector: 'nga-merchant-history',
  templateUrl: 'history.html',
  styleUrls: ['./history.scss'],
})
export class HistoryComponent {

  public feed: Array<Object>;

  constructor(private _historyService: HistoryService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  private _loadFeed() {
    this.feed = this._historyService.getData();
  }


}
