export class Customer {
	name: string;
	surname: string;
	phone: number;
	mail: string;
	comments: string;

	constructor(name: string, surname: string, phone: number, mail: string, comments?: string) {
		this.name = name;
		this.surname = surname;
		this.phone = phone;
		this.mail = mail;
		this.comments = comments || '';
	}
}