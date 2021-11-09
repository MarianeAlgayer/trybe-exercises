const chessPiece = 'QUEEN';

switch(chessPiece.toLowerCase()) {
    case 'king':
        console.log('King -> one square in any direction.');
        break;
    case 'queen':
        console.log('Queen -> diagonally, horizontally, or vertically any number of squares.');
        break;
    case 'rock':
        console.log('Rook -> horizontally or vertically any number of squares.');
        break;
    case 'bishop':
        console.log('Bishop -> diagonally any number of squares.');
        break;
    case 'knight':
        console.log('Knight -> in an L shape.');
        break;
    case 'pawn':
        console.log('Pawn -> vertically forward one square, with the option to move two squares if they have not yet moved.');
        break;
    default:
        console.log('Error: invalid chess piece.');
        break;
}
