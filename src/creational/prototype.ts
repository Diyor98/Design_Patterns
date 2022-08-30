interface Address {
	city: string;
	street: string;
}

class User {
	private name: string;
	private phoneNumber: number;
	private address: Address;

	constructor(name: string, phoneNumber: number, address: Address) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.address = address;
	}

	clone(): User {
		const user = new User(this.name, this.phoneNumber, this.address);

		return user;
	}
}
