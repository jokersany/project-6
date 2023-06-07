const exchangeRate = 40
for (let i = 10; i <= 100; i += 10) {
  const costInUAH = i * exchangeRate
  console.log(`Вартість ${i} доларів = ${costInUAH} гривень`)
}

function isPrime(number) {
  if (number <= 1) {
      return false
  }
  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false
      }
  }
  return true
}

function isPowerOfThree(sum) {
  while (sum > 1 && sum % 3 === 0) {
    sum /= 3
  }
  return sum === 1
}
