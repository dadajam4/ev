# ev
Simple Class basesd event observer.(With TypeScript type injection)

[docs](https://dadajam4.github.io/ev/classes/_ev_.ev.html)

## Usage

### Install package
```
npm install @dadajam4/ev --save
```

### In your code
```JavaScript
import EV from '@dadajam4/dd-ev';

const ev = new EV();
ev.on('someEvent', e => {
  console.log(e);
  // ---> 10
  // ---> { someKey: 'someValue' }
});
ev.emit('someEvent', 10);
ev.emit('someEvent', { someKey: 'someValue' });

// Extends Class
class SomeClass extends EV {}
```

### TypeScript
```TypeScript
class SomeClass extends EV<{event1: string, event2: boolean}> {
  constructor() {
    super();
    this.emit('event1', 5); // ng
    this.emit('event1', 'string'); // ok
    this.on('event2', event => {
      const var1: string = event; // ng
      const var2: boolean = event; // ok
    });
  }
}
```