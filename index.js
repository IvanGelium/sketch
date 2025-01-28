let screenCr;
let screenSizeVarX;
let screenSizeVarY;
const screen = document.querySelector('.screen'); 
let cell;
let id;
let cellSize = 16;
let xRow;
let sqCoord;
let mouseSq;
let intId;
onload = screenCreation ();
onload = gridGen();

function screenCreation () {
    screenCr = document.createElement('div');
    screenSizeX();
    screenSizeY();
    screenCr.style.height = screenSizeVarX+"px";
    screenCr.style.width = screenSizeVarY+"px";
    screenCr.className = "actualScreen";
    screen.appendChild(screenCr);
    console.log("IM FUCKING WORKING");
}

screenCr.addEventListener('mousemove', (e)=> {
    let xStep = Math.ceil(e.offsetX/cellSize);
    let yStep = Math.floor(e.offsetY/cellSize);
    console.log ("y"+yStep);
    console.log ("x"+xStep);
    console.log ("coord"+sqCoord)
    xRow = Math.round(screenCr.clientWidth/cellSize);
    if (e.offsetY < cellSize) {
        sqCoord = xStep;
    } else {sqCoord = xStep + (yStep *xRow);}
});

screenCr.addEventListener('mousedown', () => {
    intId = setInterval (() => {
    draw()},10); 
});

function draw () {
    mouseSq = (sqCoord).toString();
    document.getElementById(mouseSq).style.background = "black";
}

document.addEventListener('mouseup', () => {
    clearInterval(intId);
    for (let c = 0; c <= intId; c++) {
        clearInterval(c);
    }
});

function gridGen() {
    let k = gridSize();
    for (let i = 1; i < k; i++) {
        id = i;
        createCell();
    }
}



function createCell() {

    cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.height = cellSize+"px";
    cell.style.width = cellSize+"px";
    cell.id = id - "";
    cell.style.backgroundColor = colorVaria();
    screenCr.appendChild(cell);
    
}

function screenSizeX() {
    let xBas = screen.clientHeight;

    for (xBas; xBas%cellSize != 0; xBas--) {
        continue;
    }
    screenSizeVarX = xBas;
    return screenSizeVarX
}

function screenSizeY() {
    let yBas = screen.clientWidth;
    for (yBas; yBas%cellSize != 0; yBas--) {
        continue;
    }
    screenSizeVarY = yBas;
    return screenSizeVarY
}

function gridSize () {
    return Math.ceil((screenCr.clientHeight * screenCr.clientWidth)/(cellSize*cellSize));
    
}

function colorVaria() {
    let color;
    let x = Math.floor(Math.random()* 3 + 1);
    switch (x) {
        case 1:
            color = "#fff8d5";
            break;
        case 2:
            color = "#f7e8b2";
            break;
        case 3:
            color = "#f2da99";
            break;
        default:
            color = "#ffff00";
            break;
    }
    return color;
}
