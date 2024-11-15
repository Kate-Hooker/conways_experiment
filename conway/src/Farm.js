import {  useState } from 'react'
import './Farm.css'

  function Farm() {
    
    const initialBoard = Array.from({ length: 20 }, () =>
      Array(30).fill(false)
    );

    const [board, setBoard] = useState(initialBoard)
  
    function findTheNeighbours(x, y, board) {
      let neighbours = 0
      const myNeighbours = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1],
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
  
    function generate() {
      const nextGenerationBoard = oneLifeCycle(board)
      setBoard(nextGenerationBoard)
      console.log('Next generation:', nextGenerationBoard)
    }
  
    function handleCellClick(x, y) {
      const newBoard = board.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === x && colIndex === y ? !cell : cell
        )
      )
      setBoard(newBoard)
    }

  return (
    
    <div className="game-container">
      <h1 className="game-title">SquaresVille</h1>
      
      <div className="grid-container">
        {board.map((row, x) => (
          <div key={x} className="grid-row">
            {row.map((cell, y) => (
              <div
                key={`${x}-${y}`}
                onClick={() => handleCellClick(x, y)}
                className={`cell ${cell ? 'cell-alive' : 'cell-dead'}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={generate} className="button">
          Next generation
        </button>
      </div>
    </div>
  )
}

// I want a screen of squares that is eventually clickable with a generation button

// the generate function will map over the board and update the board
// an update will consist of a function that will map over the board and update the board

export default Farm