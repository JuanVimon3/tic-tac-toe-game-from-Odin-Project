document.addEventListener('DOMContentLoaded', function(){
  const cells = document.querySelectorAll('.cellsContainer div')
  let currentPLayer = 'X'

  cells.forEach((cell, index) => {
    cell.addEventListener('click', function (){
      if(cell.texContent === ''){
        cell.texContent = currentPLayer;
        chekWinner();
        currentPLayer = currentPLayer === 'X' ? 'O' : 'X'
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
      if(cells[a].textContent === currentPLayer &&
        cells[b].textContent === currentPLayer &&
        cells[c].textContent === currentPLayer
      ){
        alert(`Player ${currentPLayer} wins`)
        resetGame();
        break
      }
    }
  }

  function resetGame () {
    cells.forEach(cell => (cell.textContent = ''));
    currentPLayer = 'X'
  }
  // function playGame (){
  //   const winnerPossition = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8],[2,4,6]];
    
  //   const inputName = (name) => {
  //     name = alert(prompt('Please input your name'))
  //   }
  //   const inputSymbol = (x, o) => {

  //   } 
  // }
})