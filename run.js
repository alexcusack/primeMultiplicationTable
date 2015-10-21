import { generateTable } from './buildTable'
import { generatePrimeNumberList } from './generatePrimes'

const primes = generatePrimeNumberList()

const listOfPrimes = (listSize) => {
  const list = []
  for (let i = 0; i < listSize; ++i) {
    list.push(primes.next().value)
  }
  return list
}

console.log(generateTable(listOfPrimes(10)))