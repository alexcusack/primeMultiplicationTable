export function * sequentialNumbers (startingNumber = 1) { // takes a prime as argument
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
