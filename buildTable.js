export const generateTable = (listOfPrimes) => {
  const table = listOfPrimes.map((currentValue) => addRowKey(currentValue).concat(generateMultiplcationTableRowForValue(currentValue, listOfPrimes)))
  return addTableHeader(listOfPrimes, table)
}

export const generateMultiplcationTableRowForValue = (currentValue, listOfPrimes) => {
  return listOfPrimes.map((currentPrime) => currentPrime * currentValue)
}

const addTableHeader = (listOfPrimes, table) => {
  const header = ['   '].concat(listOfPrimes)
  table.unshift(header)
  return table
}

const addRowKey = (currentValue) => {
  return [currentValue, '|']
}
