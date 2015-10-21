import { generatePrimeNumberList } from '../generatePrimes'

;[
  {
    name: 'generatePrimeNumberList test, first 0 primes:',
    input: 0, // number of primes requested
    expected: [],
  },
  {
    name: 'generatePrimeNumberList test, first 1 prime:',
    input: 1, // number of primes requested
    expected: [2],
  },
  {
    name: 'generatePrimeNumberList test, first 10 primes:',
    input: 10, // number of primes requested
    expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
  },
].forEach((td) => {
  const primes = generatePrimeNumberList()
  const actual = []
  for (let i = 1; i <= td.input; ++i) { actual.push(primes.next().value) }
  const pass = JSON.stringify(actual) === JSON.stringify(td.expected)
  if (pass) {
    console.log('passed:', td.name)
  } else {
    console.log('failed:', td.name)
    console.log('actual:', actual)
    console.log('expected:', td.expected)
    process.exit()
  }
})
