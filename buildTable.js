export const generateTable = (listOfPrimes) => {
  const table = listOfPrimes.map((currentValue) => generateMultiplcationTableRowForValue(currentValue, listOfPrimes))
  return addTableHeader(listOfPrimes, table)
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
