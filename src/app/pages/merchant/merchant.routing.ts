import { Routes, RouterModule } from '@angular/router';

import { MerchantComponent } from './merchant.component';

const routes: Routes = [
  {
    path: '',
    component: MerchantComponent,
  },
];

export const routing = RouterModule.forChild(routes);
