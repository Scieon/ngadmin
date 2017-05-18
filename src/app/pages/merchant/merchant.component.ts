import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nga-merchant',
  templateUrl: 'merchant.html',
})
export class MerchantComponent {

  private merchantId: number;
  private collapse: boolean;

  constructor(private formBuilder: FormBuilder) {

  }


  // Some validators here in future
  showMerchant(mid) {
    this.merchantId = mid;
    this.collapse = false;
  }
}
