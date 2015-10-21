export function * sequentialNumbers (startingNumber = 1) {
  while (true) {
    yield startingNumber++
  }
}

export function * getNextPrimeNumber (numberList, currentPrimeNumber) {
  for (let number of numberList) {
    if (number % currentPrimeNumber !== 0) {
      yield number
    }
  }
}

export function * generatePrimeNumberList () {
  let numberList = sequentialNumbers(2)
  while (true) {
    let prime = numberList.next().value
    yield prime
    numberList = getNextPrimeNumber(numberList, prime)
  }
}

const primes = generatePrimeNumberList()
const list = []
for (let i = 0; i < 10; ++i) {
  list.push(primes.next().value)
}

const generateTable = (listOfPrimes) => {
  return listOfPrimes.map((currentValue) => generateMultiplcationTableRowForValue(currentValue, listOfPrimes))
}

const addTableHeader = (listOfPrimes, table) => {
  const header = ['   '].concat(listOfPrimes)
  table.unshift(header)
  return table
}

const generateMultiplcationTableRowForValue = (currentValue, listOfPrimes) => {
  return addRowKey(currentValue).concat(listOfPrimes.map((currentPrime) => currentPrime * currentValue))
}

const addRowKey = (currentValue) => {
  return [currentValue, '|']
}

console.log(addTableHeader(list, generateTable(list)))
