import { sequentialNumberGenerator } from '../generatePrimes'

;[
  {
    name: 'squentialNumberGenerator test, empty base:',
    expected: [1, 2, 3, 4, 5],
  },
  {
    name: 'squentialNumberGenerator test, base 1:',
    input: 1,
    expected: [1, 2, 3, 4, 5],
  },
  {
    name: 'squentialNumberGenerator test, base 88:',
    input: 81,
    expected: [81, 82, 83, 84, 85],
  }
].forEach((td) => {
  const actual = []
  const nums = sequentialNumbers(td.input)
  for (let i = 1; i <= 5; ++i) { actual.push(nums.next().value) }
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

