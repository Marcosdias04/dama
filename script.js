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

// Adicionar evento de clique para as peças
document.querySelectorAll('.piece').forEach(piece => {
  piece.addEventListener('click', function () {
    if (selectedPiece) {
      selectedPiece.style.border = '';
    }
    selectedPiece = this;
    selectedPiece.style.border = '2px solid yellow';
  });
});

// Adicionar evento de clique para as células
document.querySelectorAll('.cell.black').forEach(cell => {
  cell.addEventListener('click', function () {
    if (selectedPiece && !this.querySelector('.piece') && isValidMove(selectedPiece, this)) {
      this.appendChild(selectedPiece);
      selectedPiece.style.border = '';
      selectedPiece = null;
    }
  });
});

// Função para verificar se o movimento é válido
function isValidMove(piece, targetCell) {
  const pieceRow = piece.parentElement.parentElement.rowIndex; // Linha onde a peça está
  const pieceCol = piece.parentElement.cellIndex; // Coluna onde a peça está
  const targetRow = targetCell.parentElement.rowIndex; // Linha da célula de destino
  const targetCol = targetCell.cellIndex; // Coluna da célula de destino

  // Verifica se o movimento é diagonal (diferença de linha e coluna deve ser igual a 1)
  if (Math.abs(pieceRow - targetRow) === 1 && Math.abs(pieceCol - targetCol) === 1) {
    return true; // Movimento válido
  }

  return false; // Movimento inválido
}
