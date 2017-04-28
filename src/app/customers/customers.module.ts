import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
// import { SingleCustomerComponent } from './single-customer/single-customer.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
