import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
  selectedCustomer: any = {};
  customerIsDeleted = false;
  newCustomer: any = {};

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

  addNewCustomer () {
    this.newCustomer = new Customer(this.newCustomer.name, this.newCustomer.surname, this.newCustomer.phone, this.newCustomer.mail, this.newCustomer.comments);
    this.customers.push(this.newCustomer);
  }

}
