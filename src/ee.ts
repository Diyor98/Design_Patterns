import EventEmitter from 'events';

const ee = new EventEmitter();

ee.on('data', () => {
	console.log('Data emitted');
});

ee.emit('data');
