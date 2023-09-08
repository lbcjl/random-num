function generateRandomNumber() {
  return Math.floor(Math.random() * 12) + 1
}

function generateRandomArray() {
  const arr = []
  while (arr.length < 2) {
    const num = generateRandomNumber()
    if (!arr.includes(num)) {
      arr.push(num)
    }
  }
  return arr
}

function generateThreeRandomSets() {
  const sets = []
  for (let i = 0; i < 3; i++) {
    sets.push(generateRandomArray())
  }
  return sets
}

function pickTwoNumbersFromRandomSets(sets) {
  const selectedNumbers = []
  while (selectedNumbers.length < 2) {
    const setIndex = Math.floor(Math.random() * sets.length)
    const selectedNumber = sets[setIndex][Math.floor(Math.random() * 2)]
    if (!selectedNumbers.includes(selectedNumber)) {
      selectedNumbers.push(selectedNumber)
    }
  }
  return selectedNumbers
}

function generateFiveRandomNumbers() {
  const arr = []
  while (arr.length < 5) {
    const num = Math.floor(Math.random() * 35) + 1
    if (!arr.includes(num)) {
      arr.push(num)
    }
  }
  return arr
}

function generateThreeRandomNumberSets() {
  const sets = []
  for (let i = 0; i < 3; i++) {
    sets.push(generateFiveRandomNumbers())
  }
  return sets
}

function pickFiveNumbersFromRandomSets(sets) {
  const selectedNumbers = []
  while (selectedNumbers.length < 5) {
    const setIndex = Math.floor(Math.random() * sets.length)
    const selectedNumber = sets[setIndex][Math.floor(Math.random() * 5)]
    if (!selectedNumbers.includes(selectedNumber)) {
      selectedNumbers.push(selectedNumber)
    }
  }
  return selectedNumbers
}

const generateButton = document.getElementById('generateButton')
const result = document.getElementById('result')

generateButton.addEventListener('click', function () {
  const randomSets = generateThreeRandomSets()
  const selectedNumbers1 = pickTwoNumbersFromRandomSets(randomSets)
  const randomNumberSets = generateThreeRandomNumberSets()
  const selectedNumbers2 = pickFiveNumbersFromRandomSets(randomNumberSets)

  let resultText = `从 1-12 中随机生成两个数字：${selectedNumbers1.join(
    ', '
  )}\n`
  resultText += `从 1-35 中随机生成五个数字：${selectedNumbers2.join(
    ', '
  )}`
  result.innerText = resultText
})