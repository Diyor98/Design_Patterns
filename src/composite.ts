abstract class Component {
	protected parent: Component | null;

	public setParent(component: Component | null) {
		this.parent = component;
	}

	public getParent(): Component | null {
		return this.parent;
	}

	public add(component: Component) {}
	public remove(component: Component) {}

	public isComposite() {
		return false;
	}

	public abstract operation(): string;
}

class Leaf extends Component {
	public override operation(): string {
		return 'Leaf operation';
	}
}

class Composite extends Component {
	private components: Component[] = [];

	public override add(component: Component): void {
		this.components.push(component);
		component.setParent(this);
	}

	public override remove(component: Component): void {
		const index = this.components.indexOf(component);
		this.components.splice(index, 1);
		component.setParent(null);
	}

	public override isComposite(): boolean {
		return true;
	}

	public override operation(): string {
		const result: string[] = [];
		for (const component of this.components) {
			result.push(component.operation());
		}

		return `Branch${result.join('+')}`;
	}
}

function clientCode(component: Component) {
	console.log(`Result: ${component.operation()}`);
}

const simple = new Leaf();

clientCode(simple);

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);

clientCode(tree);
