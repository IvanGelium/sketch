const screen = document.querySelector('.screen'); 
let cell;
let id;
onload = gridGen();


screen.addEventListener()


function gridGen() {
    let k = gridSize();
    for (let i = 0; i < k; i++) {
        id = i;
        createCell();
    }
}



function createCell() {
    cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = id - "";
    cell.style.backgroundColor = colorVaria();
    screen.appendChild(cell);
    
}

function gridSize () {
    return Math.ceil((screen.clientHeight * screen.clientWidth)/256);
    
}

function colorVaria() {
    let color;
    let x = Math.floor(Math.random()* 3 + 1);
    switch (x) {
        case 1:
            color = "#13e600";
            break;
        case 2:
            color = "#3300ff";
            break;
        case 3:
            color = "#ffff00";
            break;
        default:
            color = "#ffff00";
            break;
    }
    return color;
}