// Simple EventEmitter class
export class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Listen to events
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  // Emit events
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data));
    }
  }
}

// Create an instance of the EventEmitter
export const eventEmitter = new EventEmitter();
