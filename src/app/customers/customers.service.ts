import { CUSTOMERS } from './customers-data';
import { Injectable } from '@angular/core';

@Injectable()

export class CustomersService {
	getCustomers() {
		return Promise.resolve(CUSTOMERS);
	}
}
