class Abstraction {
	protected implementation: Implementation;
	constructor(implementation: Implementation) {
		this.implementation = implementation;
	}

	public operation(): string {
		const result = this.implementation.operationImplementation();
		return `Abstraction: Base operation with ${result}`;
	}
}

class ExtendedAbstraction extends Abstraction {
	public override operation(): string {
		const result = this.implementation.operationImplementation();
		return `ExtendedAbstraction: Extended operation with ${result}`;
	}
}

interface Implementation {
	operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
	operationImplementation(): string {
		return 'Concrete Implementation A';
	}
}

class ConcreteImplementationB implements Implementation {
	operationImplementation(): string {
		return 'Concrete Implementation B';
	}
}

function clientCodeBridge(abstraction: Abstraction) {
	console.log(abstraction.operation());
}

const implementationA = new ConcreteImplementationA();
const abstraction = new Abstraction(implementationA);
clientCodeBridge(abstraction);

const implementationB = new ConcreteImplementationB();
const extendedAbstraction = new ExtendedAbstraction(implementationB);
clientCodeBridge(extendedAbstraction);
