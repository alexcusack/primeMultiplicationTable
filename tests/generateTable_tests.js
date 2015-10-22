import { generateTable } from '../buildTable'
;[
  {
    name: 'generateTable, empty input:',
    input: [],
    expected: [],
  },
  {
    name: 'generateTable, single int:',
    input: [2],
    expected: [[2, 4]],
  },
  {
    name: 'generateTable, double int:',
    input: [2, 3],
    expected: [
                [ 2, 4, 6 ],
                [ 3, 6, 9 ],
    ],
  },
].forEach((td) => {
  const actual = generateTable(td.input).table// get just the table, remove row key
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
