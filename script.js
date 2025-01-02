const board = document.getElementById('board');

// Cria o tabuleiro de damas
function createBoard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      board.appendChild(cell);

      // Adiciona peças nas 3 primeiras e últimas linhas
      if (row < 3 && (row + col) % 2 !== 0) {
        const piece = document.createElement('div');
        piece.classList.add('piece', 'red');
        cell.appendChild(piece);
      } else if (row > 4 && (row + col) % 2 !== 0) {
        const piece = document.createElement('div');
        piece.classList.add('piece', 'black');
        cell.appendChild(piece);
      }

      let selectedPiece = null;

// Adicionar evento de clique às peças
document.querySelectorAll('.piece').forEach(piece => {
  piece.addEventListener('click', function () {
    if (selectedPiece) {
      selectedPiece.style.border = '';
    }
    selectedPiece = this;
    selectedPiece.style.border = '2px solid yellow';
  });
});

// Adicionar evento de clique às células
document.querySelectorAll('.cell.black').forEach(cell => {
  cell.addEventListener('click', function () {
    if (selectedPiece && !this.querySelector('.piece')) {
      this.appendChild(selectedPiece);
      selectedPiece.style.border = '';
      selectedPiece = null;
    }
  });
});
    }
  }
}

createBoard();
