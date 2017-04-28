import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// import {NgFor} from '@angular/common';
import {Customer} from './customer';
import {CustomersService} from './customers.service';

@Component({
  selector: 'app-customers',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomersService],
})

export class CustomersComponent implements OnInit {

  customers: Customer[];
  customersLength: number;
  title = 'Klienci';
  selectedCustomer: Customer;
  customerIsDeleted = false;
  newCustomer: Customer;

  constructor (private _customersService: CustomersService) {
  }

  ngOnInit () {
    this.getCustomers();
  }

  getCustomers () {
    this._customersService.getCustomers().then((res) => {
      this.customers = res;
      this.customersLength = this.customers.length;
    });
  }

  selectCustomer (customer) {
    this.selectedCustomer = customer;
  }

  deleteCustomer () {
    this.customers.splice(this.customers.indexOf(this.selectedCustomer), 1);
    this.customerIsDeleted = true;
  }

  updateCustomer () {

  }

}
