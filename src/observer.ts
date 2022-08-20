interface IObserver {
	update(data: any): void;
}

class ObserverOne implements IObserver {
	update(data: any): void {
		console.log(`Observer One notified with info: ${data}`);
	}
}

class ObserverTwo implements IObserver {
	update(data: any): void {
		console.log(`Observer Two notified with info: ${data}`);
	}
}

interface IObservable {
	add(eventName: string, observer: IObserver): void;
	remove(eventName: string, observer: IObserver): void;
	notify(eventName: string, data: any): void;
}

class Observable implements IObservable {
	private eventObserversMap = new Map<string, IObserver[]>();

	add(eventName: string, observer: IObserver) {
		const observers = this.eventObserversMap.get(eventName) ?? [];
		if (observers.includes(observer)) return;
		observers.push(observer);
		this.eventObserversMap.set(eventName, observers);
	}

	remove(eventName: string, observer: IObserver) {
		const observers = this.eventObserversMap.get(eventName);
		if (!observers) throw new Error(`${eventName} event does not exist`);
		this.eventObserversMap.set(
			eventName,
			observers.filter((s) => s !== observer)
		);
	}

	notify(eventName: string, data: any) {
		const observers = this.eventObserversMap.get(eventName);
		if (!observers) throw new Error(`${eventName} event does not exist`);
		for (const observer of observers) {
			observer.update(data);
		}
	}
}

const observer1 = new ObserverOne();
const observer2 = new ObserverTwo();

const publisher = new Observable();
const eventOne = 'eventOne';

publisher.add(eventOne, observer1);

publisher.notify(eventOne, 'Notified First');

publisher.add(eventOne, observer2);

publisher.notify(eventOne, 'Notified Second');

publisher.remove(eventOne, observer1);

publisher.notify(eventOne, 'Notified Third');
