import { generateTable } from './buildTable'
import { generatePrimeNumberList } from './generatePrimes'

const listSize = parseInt(process.argv[2]) || 10

const primes = generatePrimeNumberList()

const take = (generator, listSize) => {
  const list = []
  for (let i = 0; i < listSize; ++i) {
    list.push(generator.next().value)
  }
  return list
}

console.log(generateTable(take(primes, listSize)))



// list
// package.json
// readme.md
// format function -- charm
// command to run test --  echo tests/*_tests.js | xargs -n1 babel-node