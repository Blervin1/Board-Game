const board = document.querySelector('#board')
const colors = ['#2b3e50', '#3498db', '#e74c3c', '#1abc9c', '#9b59b6', '#34495e', '#f39c12', '#16a085', '#c0392b', '#7f8c8d', '#2980b9', '#d35400', '#2ecc71', '#8e44ad', '#e67e22', '#27ae60', '#95a5a6', '#d35400', '#3498db', '#ecf0f1', '#e74c3c', '#2c3e50', '#f39c12', '#16a085', '#bdc3c7', '#f1c40f', '#2980b9', '#e67e22', '#c0392b', '#2ecc71', '#1abc9c', '#7f8c8d', '#95a5a6', '#34495e', '#8e44ad', '#ecf0f1', '#3498db', '#2c3e50', '#f1c40f', '#16a085', '#e74c3c', '#2980b9', '#e67e22', '#bdc3c7', '#d35400', '#2ecc71', '#27ae60', '#f39c12', '#7f8c8d', '#8e44ad',
]
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 5px ${color}, 0 0 25px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px `
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
