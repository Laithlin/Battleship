var Plate = /** @class */ (function () {
    function Plate(startX, startY, height, width, color) {
        this.playerCanvas = document.getElementById('playerField');
        this.playerContex = this.playerCanvas.getContext('2d');
        this.startX = startX;
        this.startY = startY;
        this.height = height;
        this.width = width;
        this.color = color;
    }
    Plate.prototype.drawBoard = function () {
        this.playerContex.beginPath();
        this.playerContex.fillStyle = this.color;
        this.playerContex.rect(this.startX, this.startY, this.width, this.height);
        this.playerContex.fill();
    };
    return Plate;
}());
function playerDraw() {
    for (var i = 0; i < 10; i++) {
        var temporaryPlate = [];
        for (var j = 0; j < 10; j++) {
            var plate = new Plate(10 + 60 * i, 10 + 60 * j, 50, 50, 'rgba(183,179,199,1)');
            temporaryPlate.push(plate);
            plate.drawBoard();
        }
        plates.push(temporaryPlate);
    }
}
function updateGrid(tempGrid, field, grid, ship) {
    var startExcludeX = -1;
    var startExcludeY = -1;
    if (field[0] === 0) {
        if (grid == 'x') {
            startExcludeY = -4;
        }
        else if (grid == 'y') {
            startExcludeX = -4;
        }
        for (var j = startExcludeX; j < 2; j++) {
            for (var i = startExcludeY; i < ship + 1; i++) {
                tempGrid.push([field[1] + i, field[2] + j]);
            }
        }
        return tempGrid;
    }
    else if (field[0] === 1) {
        if (grid == 'x') {
            startExcludeY = -4;
        }
        else if (grid == 'y') {
            startExcludeX = -4;
        }
        for (var j = startExcludeY; j < 2; j++) {
            for (var i = startExcludeX; i < ship + 1; i++) {
                tempGrid.push([field[1] + j, field[2] + i]);
            }
        }
        return tempGrid;
    }
}
function checkIfInArray(arr, elements) {
    var inArray = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] === elements[0] && arr[i][1] === elements[1]) {
            inArray = true;
        }
    }
    return inArray;
}
function placeShips() {
    var battleship = 5;
    var destroyer = 4;
    var battleshipField = [];
    var columnGrid = [];
    var rowGrid = [];
    var battleshipHorizontal = Math.floor(Math.random() * 2);
    var destroyerHorizontal = Math.floor(Math.random() * 2);
    var destroyerHorizontal2 = Math.floor(Math.random() * 2);
    if (battleshipHorizontal === 0) {
        var battleshipRandom1 = Math.floor(Math.random() * 6);
        var battleshipRandom2 = Math.floor(Math.random() * 10);
        battleshipField.push(battleshipHorizontal);
        battleshipField.push(battleshipRandom1);
        battleshipField.push(battleshipRandom2);
        for (var i = 0; i < battleship; i++) {
            ships.push([battleshipRandom1 + i, battleshipRandom2]);
        }
    }
    else if (battleshipHorizontal === 1) {
        var battleshipRandom1 = Math.floor(Math.random() * 10);
        var battleshipRandom2 = Math.floor(Math.random() * 6);
        battleshipField.push(battleshipHorizontal);
        battleshipField.push(battleshipRandom1);
        battleshipField.push(battleshipRandom2);
        for (var i = 0; i < battleship; i++) {
            ships.push([battleshipRandom1, battleshipRandom2 + i]);
        }
    }
    columnGrid = updateGrid(columnGrid, battleshipField, 'x', battleship);
    rowGrid = updateGrid(rowGrid, battleshipField, 'y', battleship);
    var destroyerField = [];
    if (destroyerHorizontal === 0) {
        var destroyerRandom1 = Math.floor(Math.random() * 6);
        var destroyerRandom2 = Math.floor(Math.random() * 10);
        if (checkIfInArray(columnGrid, [destroyerRandom1, destroyerRandom2]) || checkIfInArray(rowGrid, [destroyerRandom1, destroyerRandom2])) {
            var rollAgain = true;
            while (rollAgain) {
                destroyerRandom1 = Math.floor(Math.random() * 6);
                destroyerRandom2 = Math.floor(Math.random() * 10);
                if (checkIfInArray(columnGrid, [destroyerRandom1, destroyerRandom2]) || checkIfInArray(rowGrid, [destroyerRandom1, destroyerRandom2])) {
                    continue;
                }
                else {
                    rollAgain = false;
                }
            }
        }
        destroyerField.push(destroyerHorizontal);
        destroyerField.push(destroyerRandom1);
        destroyerField.push(destroyerRandom2);
        for (var i = 0; i < destroyer; i++) {
            ships.push([destroyerRandom1 + i, destroyerRandom2]);
        }
    }
    else if (destroyerHorizontal === 1) {
        var destroyerRandom1 = Math.floor(Math.random() * 10);
        var destroyerRandom2 = Math.floor(Math.random() * 6);
        if (checkIfInArray(columnGrid, [destroyerRandom1, destroyerRandom2]) || checkIfInArray(rowGrid, [destroyerRandom1, destroyerRandom2])) {
            var rollAgain = true;
            while (rollAgain) {
                destroyerRandom1 = Math.floor(Math.random() * 10);
                destroyerRandom2 = Math.floor(Math.random() * 6);
                if (checkIfInArray(columnGrid, [destroyerRandom1, destroyerRandom2]) || checkIfInArray(rowGrid, [destroyerRandom1, destroyerRandom2])) {
                    continue;
                }
                else {
                    rollAgain = false;
                }
            }
        }
        destroyerField.push(destroyerHorizontal);
        destroyerField.push(destroyerRandom1);
        destroyerField.push(destroyerRandom2);
        for (var i = 0; i < destroyer; i++) {
            ships.push([destroyerRandom1, destroyerRandom2 + i]);
        }
    }
    columnGrid = updateGrid(columnGrid, destroyerField, 'x', destroyer);
    rowGrid = updateGrid(rowGrid, destroyerField, 'y', destroyer);
    if (destroyerHorizontal2 === 0) {
        var destroyerRandom3 = Math.floor(Math.random() * 6);
        var destroyerRandom4 = Math.floor(Math.random() * 10);
        if (checkIfInArray(columnGrid, [destroyerRandom3, destroyerRandom4]) || checkIfInArray(rowGrid, [destroyerRandom3, destroyerRandom4])) {
            var rollAgain = true;
            while (rollAgain) {
                destroyerRandom3 = Math.floor(Math.random() * 6);
                destroyerRandom4 = Math.floor(Math.random() * 10);
                if (checkIfInArray(columnGrid, [destroyerRandom3, destroyerRandom4]) || checkIfInArray(rowGrid, [destroyerRandom3, destroyerRandom4])) {
                    continue;
                }
                else {
                    rollAgain = false;
                }
            }
        }
        console.log(destroyerRandom3, destroyerRandom4);
        for (var i = 0; i < destroyer; i++) {
            ships.push([destroyerRandom3 + i, destroyerRandom4]);
        }
    }
    else if (destroyerHorizontal2 === 1) {
        var destroyerRandom3 = Math.floor(Math.random() * 10);
        var destroyerRandom4 = Math.floor(Math.random() * 6);
        if (checkIfInArray(columnGrid, [destroyerRandom3, destroyerRandom4]) || checkIfInArray(rowGrid, [destroyerRandom3, destroyerRandom4])) {
            var rollAgain = true;
            while (rollAgain) {
                destroyerRandom3 = Math.floor(Math.random() * 10);
                destroyerRandom4 = Math.floor(Math.random() * 6);
                if (checkIfInArray(columnGrid, [destroyerRandom3, destroyerRandom4]) || checkIfInArray(rowGrid, [destroyerRandom3, destroyerRandom4])) {
                    continue;
                }
                else {
                    rollAgain = false;
                }
            }
        }
        console.log(destroyerRandom3, destroyerRandom4);
        for (var i = 0; i < destroyer; i++) {
            ships.push([destroyerRandom3, destroyerRandom4 + i]);
        }
    }
    console.log(ships);
}
function checkPattern(pattern) {
    return false;
}
function changeInput(input) {
    var firstPart = 0;
    var slicedInput = input.slice(1, input.length);
    var secondPart = +slicedInput;
    var lowInput = input[0].toLowerCase();
    switch (lowInput) {
        case 'a': {
            firstPart = 0;
            break;
        }
        case 'b': {
            firstPart = 1;
            break;
        }
        case 'c': {
            firstPart = 2;
            break;
        }
        case 'd': {
            firstPart = 3;
            break;
        }
        case 'e': {
            firstPart = 4;
            break;
        }
        case 'f': {
            firstPart = 5;
            break;
        }
        case 'g': {
            firstPart = 6;
            break;
        }
        case 'h': {
            firstPart = 7;
            break;
        }
        case 'i': {
            firstPart = 8;
            break;
        }
        case 'j': {
            firstPart = 9;
        }
    }
    return [firstPart, secondPart - 1];
}
function playerMove() {
    var playerInput = document.getElementById("input");
    var playerAction = document.getElementById('action');
    var shoot = changeInput(playerInput.value);
    var battleship = ships.slice(0, 5);
    var destroyer1 = ships.slice(5, 9);
    var destroyer2 = ships.slice(9, ships.length);
    //
    // console.log("shot", shoot);
    // console.log("battleship: ", battleshipShot);
    // console.log("destroyer1: ",destroyer1Shot);
    // console.log("destroyer2: ", destroyer2Shot);
    if (checkIfInArray(battleship, shoot)) {
        // console.log("trafiony");
        plates[shoot[0]][shoot[1]].color = 'rgba(0,150,0,1)';
        plates[shoot[0]][shoot[1]].drawBoard();
        console.log(!checkIfInArray(battleshipShot, shoot));
        if (!checkIfInArray(battleshipShot, shoot)) {
            console.log("trafiony");
            battleshipShot.push(shoot);
        }
        playerAction.innerHTML = "HIT!";
    }
    else if (checkIfInArray(destroyer1, shoot)) {
        plates[shoot[0]][shoot[1]].color = 'rgba(0,150,0,1)';
        plates[shoot[0]][shoot[1]].drawBoard();
        console.log(!checkIfInArray(battleshipShot, shoot));
        if (!checkIfInArray(destroyer1Shot, shoot)) {
            console.log("trafiony");
            destroyer1Shot.push(shoot);
        }
        playerAction.innerHTML = "HIT!";
    }
    else if (checkIfInArray(destroyer2, shoot)) {
        plates[shoot[0]][shoot[1]].color = 'rgba(0,150,0,1)';
        plates[shoot[0]][shoot[1]].drawBoard();
        console.log(!checkIfInArray(battleshipShot, shoot));
        if (!checkIfInArray(destroyer2Shot, shoot)) {
            console.log("trafiony");
            destroyer2Shot.push(shoot);
        }
        playerAction.innerHTML = "HIT!";
    }
    else {
        plates[shoot[0]][shoot[1]].color = 'rgba(150,150,0,1)';
        plates[shoot[0]][shoot[1]].drawBoard();
        playerAction.innerHTML = "MISS!";
    }
    if (battleshipShot.length == 5 && battleshipSink == true) {
        win.push(true);
        console.log("zatopiony");
        playerAction.innerHTML = "SINK!";
        battleshipSink = false;
    }
    if (destroyer1Shot.length == 4 && destroyer1Sink == true) {
        win.push(true);
        console.log("zatopiony");
        playerAction.innerHTML = "SINK!";
        destroyer1Sink = false;
    }
    if (destroyer2Shot.length == 4 && destroyer2Sink == true) {
        win.push(true);
        console.log("zatopiony");
        playerAction.innerHTML = "SINK!";
        destroyer2Sink = false;
    }
    if (win.length == 3) {
        console.log("you win!");
        playerAction.innerHTML = "YOU WIN!";
    }
}
function gameLoop() {
    playerDraw();
    placeShips();
    battleshipShot = [];
    destroyer1Shot = [];
    destroyer2Shot = [];
    win = [];
    battleshipSink = true;
    destroyer1Sink = true;
    destroyer2Sink = true;
}
var plates = [];
var ships = [];
var battleshipShot;
var destroyer1Shot;
var destroyer2Shot;
var win;
var battleshipSink;
var destroyer1Sink;
var destroyer2Sink;
var btnStart = document.getElementById("start");
btnStart.addEventListener("click", function (e) { return gameLoop(); });
var btnInput = document.getElementById("play");
btnInput.addEventListener("click", function (e) { return playerMove(); });
var enterInput = document.getElementById("input");
enterInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        playerMove();
    }
});
// gameLoop();
