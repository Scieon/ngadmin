import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './merchant.routing';
import { MerchantComponent } from './merchant.component';
import {PropertyComponent} from "./components/property/property.component";
import {HistoryComponent} from "./components/history/history.component";
import {HistoryService} from "./components/history/history.service";
import {ContentComponent} from "./components/content/content.component";

import { NgaModule } from '../../theme/nga.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    MerchantComponent,
    PropertyComponent,
    HistoryComponent,
    ContentComponent,
  ],
  providers: [
    HistoryService,
  ],
})
export class MerchantModule {}
