function * squentialNumbers (startingNumber = 1) { // takes a prime as argument
  while (true) {
    yield startingNumber++
  }
}

function * getNextPrimeNumber (numberList, currentPrimeNumber) {
  for (let number of numberList) {
    if (number % currentPrimeNumber !== 0) {
      yield number
    }
  }
}

