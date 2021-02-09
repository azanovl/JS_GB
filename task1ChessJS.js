let rowCount = 10;
let colCount = 10;
const figureNames = 'ЛКСФКСКЛ'

const containerElement = document.getElementById('id-chess');
 // создаем решетку
for (let row = 0; row < rowCount; row++) {
    const trElem = document.createElement('tr');
    containerElement.appendChild(trElem);

        for (let col = 0; col < colCount; col++) {
            const cell = document.createElement('td');
            trElem.appendChild(cell);
        }
    }
// ABCDEFGH
const chessBoardFirstLine = document.querySelector('tr');
const chessBoardLastLine = document.querySelector('tr:last-child');
const firstLine = chessBoardFirstLine.querySelectorAll('td');
const lastLine = chessBoardLastLine.querySelectorAll('td');

for (let cell = 0; cell < firstLine.length; cell++) {
    firstLine[cell].style.border = 0;
    lastLine[cell].style.border = 0;
    if (cell > 0 && cell < firstLine.length - 1) {
        firstLine[cell].innerText = String.fromCharCode(cell+64);
        lastLine[cell].innerText = String.fromCharCode(cell+64);
        firstLine[cell].style.textAlign = 'center';
        lastLine[cell].style.textAlign = 'center';
    }

}

// раскрашиваем шахматную доску
const chessBoard = document.querySelectorAll('tr');

for (let i = 1; i < rowCount - 1; i++) {
    const chessLine = chessBoard[i].querySelectorAll('td');
        for (let k = 1; k < colCount - 1; k++) {
            if ((i % 2 != 0 && k % 2 == 0) || (i % 2 == 0 && k % 2 != 0)) {
                chessLine[k].style.backgroundColor = 'black';
            }
        }
}
// нумеруем строки (12345678)
for (let i = 1; i < rowCount - 1; i++) {
    const chessLine = chessBoard[i].querySelectorAll('td');
    for (let k = 0; k < colCount; k++) {
        if (k == 0 || k == colCount - 1) {
            chessLine[k].innerText = i;
            chessLine[k].style.textAlign = 'center';
            chessLine[k].style.border = 0;
        }
// расставляем пешки
        if ((i == 2 || i == rowCount - 3) && (k > 0 && k < colCount - 1)) {
            chessLine[k].innerText = 'П';
            chessLine[k].style.textAlign = 'center';
            chessLine[k].style.color = '#FF6600';
            chessLine[k].style.fontWeight = 'bold';
            chessLine[k].style.fontSize = '40px';
        }
// расставляем фигуры
        if ((i == 1 || i == rowCount - 2) && (k > 0 && k < colCount - 1)) {
            chessLine[k].innerText = figureNames[k - 1];
            chessLine[k].style.textAlign = 'center';
            chessLine[k].style.color = '#FF6600';
            chessLine[k].style.fontWeight = 'bold';
            chessLine[k].style.fontSize = '40px';
        }
    }
}

