## Setup and Run
This project has one dependency: Node
```
$node --version
v4.1.1
```

### Running
* Run `npm install`
* To run with default multiplication table of first 10 primes
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
* Run individual files with `babel-node <filepath>`

## Notes
* Babel runtime causes stack overflow error at ≈10,000 primes mark since Babel implements the ES6 generators using recursion. The native implementation in ES6 does not actually use recursion
