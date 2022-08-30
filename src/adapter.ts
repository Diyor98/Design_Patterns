class Target {
	public request(): string {
		return "Target: the default target's behavior";
	}
}

class Adaptee {
	public specificRequest(): string {
		return '.eetpadA eht fo roivaheb laicepS';
	}
}

class Adapter extends Target {
	private readonly adaptee: Adaptee;
	constructor(adaptee: Adaptee) {
		super();
		this.adaptee = adaptee;
	}
	public override request(): string {
		const result = this.adaptee.specificRequest().split('').reverse().join('');
		return result;
	}
}

function clientCodeAdapter(target: Target) {
	console.log(target.request());
}

const target = new Target();
clientCodeAdapter(target);

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
clientCodeAdapter(adapter);
