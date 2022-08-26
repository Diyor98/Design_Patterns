class Singletone {
	private static instance: Singletone;

	private constructor(private name: string) {}

	public static create(name: string) {
		if (!Singletone.instance) {
			Singletone.instance = new Singletone(name);
		}
		return Singletone.instance;
	}

	public displayName() {
		console.log(this.name);
	}
}

const s1 = Singletone.create('A');
const s2 = Singletone.create('B');

console.log(s1 == s2);
s1.displayName();
s2.displayName();
