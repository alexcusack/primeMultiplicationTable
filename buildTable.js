import Table from 'cli-table'

export const generateTable = (listOfPrimes) => {
  const table = listOfPrimes.map((currentValue) => addRowKey(currentValue).concat(generateMultiplcationTableRowForValue(currentValue, listOfPrimes)))
  return addTableHeader(listOfPrimes, table)
}

export const generateMultiplcationTableRowForValue = (currentValue, listOfPrimes) => {
  return listOfPrimes.map((currentPrime) => currentPrime * currentValue)
}

const addTableHeader = (listOfPrimes, table) => {
  const header = ['Primes'].concat(listOfPrimes)
  return {table: table, header: header}
}

const addRowKey = (currentValue) => {
  return [currentValue]
}

export const generateTableForDisplay = (generatedTableWithHeaders) => {
  const formattedTable = createTable(generatedTableWithHeaders)
  generatedTableWithHeaders.table.map((row) => formattedTable.push(row))
  return formattedTable.toString()
}

const createTable = (generatedTableWithHeaders) => {
  return new Table({
    head: generatedTableWithHeaders.header,
    colWidths: buildColumns(generatedTableWithHeaders.header.length),
  })
}

const buildColumns = (columnCount) => {
  const columns = []
  for (let i = 0; i < columnCount; ++i) {
    columns.push(8)
  }
  return columns
}
