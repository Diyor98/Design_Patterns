interface ComponentForDecorator {
	operation(): string;
}

class ConcreteComponent implements ComponentForDecorator {
	operation(): string {
		return 'Concrete Component';
	}
}

class Decorator implements ComponentForDecorator {
	protected component: ComponentForDecorator;

	constructor(component: ComponentForDecorator) {
		this.component = component;
	}

	operation(): string {
		return this.component.operation();
	}
}

class ConcreteComponentA extends Decorator {
	operation(): string {
		return `ConcreteComponentA${super.operation()}`;
	}
}

class ConcreteComponentB extends Decorator {
	operation(): string {
		return `ConcreteComponentB${super.operation()}`;
	}
}

function clientCodeForDecorators(component: ComponentForDecorator) {
	console.log(component.operation());
}

const concreteComponent = new ConcreteComponent();
clientCodeForDecorators(concreteComponent);

const concreteComponentA = new ConcreteComponentA(concreteComponent);
const concreteComponentB = new ConcreteComponentB(concreteComponentA);
clientCodeForDecorators(concreteComponentB);
