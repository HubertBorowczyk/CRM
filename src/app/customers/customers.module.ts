import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { FormsModule } from '@angular/forms';
// import { SingleCustomerComponent } from './single-customer/single-customer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
