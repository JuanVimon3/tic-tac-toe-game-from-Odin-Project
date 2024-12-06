document.addEventListener('DOMContentLoaded', function(){
  const cells = document.querySelectorAll('.cellsContainer div')
  let currentPlayer = 'X'

  cells.forEach((cell) => {
    cell.addEventListener('click', function (){
      if(cell.textContent === ''){
        cell.textContent = currentPlayer;
        chekWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      }
    })
  });

  function chekWinner () {
    const winnerPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let possitions of winnerPositions) {
      const [a, b ,c] = possitions;
      if(
        cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer
      ){
        alert(`Player ${currentPlayer} wins`)
        resetGame();
        return;
      }
    }
    if([...cells].every(cell => cell.textContent !== '')){
      alert('It\'s a draw');
      resetGame()
    }
  }

  function resetGame () {
    cells.forEach(cell => (cell.textContent = ''));
    currentPLayer = 'X'
  }
})