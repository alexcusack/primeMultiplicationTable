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
  let primeList = sequentialNumbers(2)
  while (true) {
    let prime = primeList.next().value
    yield prime
    primeList = getNextPrimeNumber(primeList, prime)// a list of sequential prime numbers as they're found
  }
}
