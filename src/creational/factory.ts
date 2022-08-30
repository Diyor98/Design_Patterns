interface Product {
	operation(): string;
}

class ConcreteProduct1 implements Product {
	operation(): string {
		return `ConcreteProduct1 operation`;
	}
}

class ConcreteProduct2 implements Product {
	operation(): string {
		return `ConcreteProduct2 operation`;
	}
}

abstract class Creator {
	protected abstract factoryMethod(): Product;

	doSomething() {
		const product = this.factoryMethod();
		console.log(`The following commands performs ${product.operation()}`);
	}
}

class ConcreteCreator1 extends Creator {
	protected factoryMethod(): Product {
		return new ConcreteProduct1();
	}
}

class ConcreteCreator2 extends Creator {
	protected factoryMethod(): Product {
		return new ConcreteProduct2();
	}
}

const creator1 = new ConcreteCreator1();
creator1.doSomething();
const creator2 = new ConcreteCreator2();
creator2.doSomething();
