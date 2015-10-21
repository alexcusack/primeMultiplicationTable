import { getNextPrimeNumber } from '../generatePrimes'

;[
  {
    name: 'getNextPrimeNumber test, currentPrime 2:',
    input: [[2, 3, 4, 5, 6], [3]],
    expected: 2,
  },
].forEach((td) => {
  const primes = getNextPrimeNumber(td.input[0], td.input[1])
  const actual = primes.next().value
  const pass = actual === td.expected
  if (pass) {
    console.log('passed:', td.name)
  } else {
    console.log('failed:', td.name)
    console.log('actual:', actual)
    console.log('expected:', td.expected)
    process.exit()
  }
})
