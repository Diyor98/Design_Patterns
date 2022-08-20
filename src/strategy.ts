class SortClient {
	private strategy: SortStrategy;

	constructor(strategy: SortStrategy) {
		this.strategy = strategy;
	}

	sort() {
		const args = [9, 8, 7, 6, 5, 4, 3, 2, 1];

		return this.strategy.sort(args);
	}

	setStrategy(strategy: SortStrategy) {
		this.strategy = strategy;
	}
}

interface SortStrategy {
	sort(args: number[]): number[];
}

class BubbleSortStrategy implements SortStrategy {
	sort(args: number[]): number[] {
		for (let j = 0; j < args.length - 1; j++) {
			for (let i = 0; i < args.length - 1 - j; i++) {
				let num = args[i];
				if (num > args[i + 1]) {
					args[i] = args[i + 1];
					args[i + 1] = num;
				}
			}
		}

		return args;
	}
}

class BubbleSortOptimizedStrategy implements SortStrategy {
	sort(args: number[]): number[] {
		for (let j = 0; j < args.length - 1; j++) {
			let flag = true;
			for (let i = 0; i < args.length - 1 - j; i++) {
				let num = args[i];
				if (num > args[i + 1]) {
					args[i] = args[i + 1];
					args[i + 1] = num;
					flag = false;
				}
			}
			if (flag) break;
		}

		return args;
	}
}

class SelectionSortStrategy implements SortStrategy {
	sort(args: number[]): number[] {
		for (let i = 0; i < args.length - 1; i++) {
			let min = i;
			for (let j = i + 1; j < args.length; j++) {
				if (args[min] > args[j]) {
					min = j;
				}
			}
			[args[i], args[min]] = [args[min], args[i]];
		}

		return args;
	}
}

class InsertionSortStrategy implements SortStrategy {
	sort(args: number[]): number[] {
		for (let i = 1; i < args.length; i++) {
			const min = args[i];
			if (min < args[i - 1]) {
				let j = i - 1;
				while (j >= 0 && args[j] > min) {
					args[j + 1] = args[j];
					j--;
				}
				args[j + 1] = min;
			}
		}
		return args;
	}
}

const sortClient = new SortClient(new BubbleSortStrategy());
console.log(sortClient.sort());

sortClient.setStrategy(new BubbleSortOptimizedStrategy());
console.log(sortClient.sort());

sortClient.setStrategy(new SelectionSortStrategy());
console.log(sortClient.sort());

sortClient.setStrategy(new InsertionSortStrategy());
console.log(sortClient.sort());
