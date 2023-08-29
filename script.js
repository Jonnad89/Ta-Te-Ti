const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = "X";

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(!cell.textContent && currentPlayer === "X"){
            cell.textContent = currentPlayer;
            currentPlayer = 'O';
            setTimeout(() => {
                playComputerTurn();
            }, 500) // Espera medio segundo antes de que juege la computadora
        }
    });
});

function playComputerTurn() {
    const emptyCells = Array.from(cells).filter(cell => !cell.textContent);
    if(emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        emptyCells[randomIndex].textContent = currentPlayer;
        currentPlayer = "X";
    }
}

resetButton.addEventListener('click', () =>{
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer= 'X';
})