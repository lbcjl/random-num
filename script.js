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

  let resultText = `
    <div class="ball-list">
      <div class="ball red-ball">${selectedNumbers1[0]}</div>
      <div class="ball red-ball">${selectedNumbers1[1]}</div>
    </div>
  `
  resultText += `
    <div class="ball-list">
      <div class="ball blue-ball">${selectedNumbers2[0]}</div>
      <div class="ball blue-ball">${selectedNumbers2[1]}</div>
      <div class="ball blue-ball">${selectedNumbers2[2]}</div>
      <div class="ball blue-ball">${selectedNumbers2[3]}</div>
      <div class="ball blue-ball">${selectedNumbers2[4]}</div>
    </div>
  `
  result.innerHTML = resultText

  // 获取所有球形元素
  const balls = document.querySelectorAll('.ball');

  // 为每个球形元素生成随机的延迟时间并应用动画
  balls.forEach(ball => {
    // 生成随机的延迟时间（单位：秒）
    const delay = Math.random() * 3;

    // 应用抖动动画样式
    ball.style.animation = `shake 1s ease-in-out ${delay}s forwards`;

    // 在动画结束时重新设置样式
    ball.addEventListener('animationend', () => {
      ball.style.animation = '';
    });
  });
})

