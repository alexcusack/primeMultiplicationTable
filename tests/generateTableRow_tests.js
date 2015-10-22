import { generateMultiplcationTableRowForValue } from '../buildTable'

;[
  {
    name: 'generateMultiplcationTableRowForValue test 1:',
    input: [1, [1]], // number of primes requested
    expected: [1],
  },
  {
    name: 'generateMultiplcationTableRowForValue test 2:',
    input: [2, [1, 2, 3, 4]], // number of primes requested
    expected: [2, 4, 6, 8],
  },
].forEach((td) => {
  const actual = generateMultiplcationTableRowForValue(td.input[0], td.input[1])
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
