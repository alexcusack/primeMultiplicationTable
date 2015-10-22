## Setup and Run
This project has one dependecy: Node
```
$node --version
v4.1.1
```

### Running
* Run `npm install`
* To run with default multiplcation table of first 10 primes
```
npm start
```
* To run with variable table size
```
npm start 20
```
* Run tests:
```
npm test
```

## Disign notes
* Babel runtime causes stack overflow error at ≈10,000 primes mark since Babel implements the ES6 generators using recursion. They are not actual recurse calls in native implementation of ES6
