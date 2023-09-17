let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cellIndex) {
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('turn-indicator').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.indexOf('') === -1) {
            document.getElementById('turn-indicator').textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('turn-indicator').textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('turn-indicator').textContent = 'Player X\'s Turn';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
}