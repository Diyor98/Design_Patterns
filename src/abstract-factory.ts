interface Button {
	render(): void;
}

class LinuxButton implements Button {
	render(): void {
		console.log(`Render ${this.constructor.name}`);
	}
}

class WindowsButton implements Button {
	render(): void {
		console.log(`Render ${this.constructor.name}`);
	}
}

interface Checkbox {
	create(): void;
}

class LinuxCheckbox implements Checkbox {
	create(): void {
		console.log(`Create ${this.constructor.name}`);
	}
}

class WindowsCheckbox implements Checkbox {
	create(): void {
		console.log(`Create ${this.constructor.name}`);
	}
}

interface Factory {
	createButton(): Button;
	createCheckbox(): Checkbox;
}

class LinuxUIFactory implements Factory {
	createButton(): Button {
		return new LinuxButton();
	}

	createCheckbox(): Checkbox {
		return new LinuxCheckbox();
	}
}

class WindowsUIFactory implements Factory {
	createButton(): Button {
		return new WindowsButton();
	}

	createCheckbox(): Checkbox {
		return new WindowsCheckbox();
	}
}

type OsType = 'windows' | 'linux';

function createFactory(type: OsType): Factory {
	switch (type) {
		case 'windows':
			return new WindowsUIFactory();
		case 'linux':
			return new LinuxUIFactory();
	}
}

const factory = createFactory('linux');
