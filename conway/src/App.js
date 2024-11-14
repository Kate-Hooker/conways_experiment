import { useEffect, useState } from 'react'

function App() {
  const initialBoard = [
    [false, true, false, false, false],
    [true, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]

  const [board, setBoard] = useState(initialBoard)

  function findTheNeighbours(x, y, board) {
    let neighbours = 0
    const myNeighbours = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]

    for (const [dx, dy] of myNeighbours) {
      const newX = x + dx
      const newY = y + dy

      if (
        newX >= 0 &&
        newX < board.length &&
        newY >= 0 &&
        newY < board[0].length
      ) {
        if (board[newX][newY] === true) {
          neighbours++
        }
      }
    }
    return neighbours
  }

  function oneLifeCycle(board) {
    let nextGenerationBoard = board.map((row) => row.slice())

    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[x].length; y++) {
        const neighbours = findTheNeighbours(x, y, board)

        if (board[x][y] === true) {
          nextGenerationBoard[x][y] = neighbours === 2 || neighbours === 3
        } else {
          nextGenerationBoard[x][y] = neighbours === 3
        }
      }
    }
    return nextGenerationBoard
  }

  useEffect(() => {
    const nextGen = oneLifeCycle(board)
    console.log('Next Generation Board:')
    console.table(nextGen)
    setBoard(nextGen)
  }, [board])

  return (
    <div>
      <h1>Conway's Game of Life</h1>
    </div>
  )
}

export default App
