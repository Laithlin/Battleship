// import {Board} from './plate';

class Plate {
    private playerCanvas: HTMLCanvasElement;
    private playerContex: CanvasRenderingContext2D | null;
    public startX: number;
    public startY: number;
    public height: number;
    public width: number;
    public color: string;
    // public angle: number;
    // public square: Path2D;

    constructor(startX, startY, height, width, color) {
        this.playerCanvas = document.getElementById('playerField') as HTMLCanvasElement;
        this.playerContex = this.playerCanvas.getContext('2d');
        this.startX = startX;
        this.startY = startY;
        this.height = height;
        this.width = width;
        this.color = color;
        // this.angle = angle;
        // this.square = new Path2D();
        // console.log("dziala3")
    }

    drawBoard() {
        // let canvasWidth = window.innerWidth * 0.95,
        //     drawWidth = canvasWidth * this.width,
        //     drawHeight = canvasWidth * this.height,
        //     drawStartX = canvasWidth * this.startX,
        //     drawStartY = canvasWidth * this.startY;

        // this.playerContex.beginPath();
        // this.playerContex.rotate(this.angle * Math.PI / 180);
        // this.square.rect(this.startX, this.startY, this.height, this.width);
        // this.playerContex.fillStyle = 'rgba(100,150,50,1)';
        // this.playerContex.fill(this.square);
        this.playerContex.beginPath();
        this.playerContex.fillStyle = this.color;
        this.playerContex.rect(this.startX , this.startY, this.width, this.height);
        this.playerContex.fill();
        // console.log("dziala2")
    }
}

function playerDraw() {

    // let ctx = playerContex;
    for (let i = 0; i < 10; i++){
        let temporaryPlate = [];
        for (let j = 0; j < 10; j++){
            let plate: Plate = new Plate(10+60*i, 10+60*j, 50, 50, 'rgba(183,179,199,1)');
            temporaryPlate.push(plate);
            plate.drawBoard();
        }
        plates.push(temporaryPlate);
    }

    console.log("dziala")
}
// [column][row]
// 0 - none
// 1 - top
// 2 - right
// 3 - bottom
// 4 - left
// 5 - top left
// 6 - top right
// 7 - bottom left
// 8 - bottom right

function checkWall(x: number, y:number): any {
    if(x === 0 && y != 9 && y != 0){
        console.log('left');
        return [true, 4]
    }
    else if (x != 0 && x != 9 && y === 0) {
        console.log('top');
        return [true, 1]
    }
    else if (x === 0 && y === 0) {
        console.log('top left');
        return [true, 5]
    }
    else if (x === 9 && y != 9 && y != 0) {
        console.log('right');
        return [true, 2]
    }
    else if (x === 9 && y === 9) {
        console.log('bottom right');
        return [true, 8]
    }
    else if (x != 0 && x != 9 && y === 9) {
        console.log('bottom');
        return [true, 3]
    }
    else if (x === 9 && y === 0) {
        console.log('top right');
        return [true, 6]
    }
    else if (x === 0 && y === 9) {
        console.log('bottom left');
        return [true, 7]
    }
    else {
        console.log('none');
        return [true, 0]
    }


}

function placeShips() {
    let battleship = 5;
    let destroyer = 4;

    let battleshipField = [];

    let battleshipHorizontal = Math.floor(Math.random()*2);
    let destroyerHorizontal = Math.floor(Math.random()*2);
    console.log(battleshipHorizontal);

    if (battleshipHorizontal === 0) {
        let battleshipRandom1 = Math.floor(Math.random()*6)
        let battleshipRandom2 = Math.floor(Math.random()*10)
        battleshipField.push(battleshipHorizontal);
        battleshipField.push(battleshipRandom1);
        battleshipField.push(battleshipRandom2);
        console.log(battleshipRandom1, battleshipRandom2)
        for (let i = 0; i < battleship; i++) {
            plates[battleshipRandom1 + i][battleshipRandom2].color = 'rgba(0,0,199,1)';
            plates[battleshipRandom1 + i][battleshipRandom2].drawBoard();
        }
    }
    else if (battleshipHorizontal === 1) {
        let battleshipRandom1 = Math.floor(Math.random() *10)
        let battleshipRandom2 = Math.floor(Math.random() *6)
        console.log(battleshipRandom1, battleshipRandom2)
        for (let i = 0; i < battleship; i++) {
            battleshipField.push(battleshipHorizontal);
            battleshipField.push(battleshipRandom1);
            battleshipField.push(battleshipRandom2);
            plates[battleshipRandom1][battleshipRandom2 + i].color = 'rgba(0,0,199,1)';
            plates[battleshipRandom1][battleshipRandom2 + i].drawBoard();
        }
    }

    let destroyerField = [];
    for(let j = 0; j < 2; j++) {
        if (destroyerHorizontal === 0) {
            let destroyerRandom1 = Math.floor(Math.random()*6)
            let destroyerRandom2 = Math.floor(Math.random()*10)
            destroyerField.push(destroyerHorizontal);
            destroyerField.push(destroyerRandom1);
            destroyerField.push(destroyerRandom2);
            console.log(destroyerRandom1, destroyerRandom2)
            for (let i = 0; i < destroyer; i++) {
                plates[destroyerRandom1 + i][destroyerRandom2].color = 'rgba(0,0,199,1)';
                plates[destroyerRandom1 + i][destroyerRandom2].drawBoard();
            }

        }
        else if (destroyerHorizontal === 1) {
            let destroyerRandom1 = Math.floor(Math.random() *10)
            let destroyerRandom2 = Math.floor(Math.random() *6)
            destroyerField.push(destroyerHorizontal);
            destroyerField.push(destroyerRandom1);
            destroyerField.push(destroyerRandom2);
            console.log(destroyerRandom1, destroyerRandom2)
            for (let i = 0; i < destroyer; i++) {
                plates[destroyerRandom1][destroyerRandom2 + i].color = 'rgba(0,0,199,1)';
                plates[destroyerRandom1][destroyerRandom2 + i].drawBoard();
            }
        }
    }

    // console.log(battleshipRandom1, battleshipRandom2)
    // plates[battleshipRandom1][battleshipRandom2].color = 'rgba(0,0,199,1)';
    // plates[battleshipRandom1][battleshipRandom2].drawBoard();
    // checkWall(battleshipRandom1, battleshipRandom2);
    // console.log(check[0])

}
// function checkIfStarted() {
//
// };

function gameLoop(): void {

    let btn = document.getElementById("start");
    btn.addEventListener("click", (e:Event) => playerDraw());

    playerDraw();
    placeShips();
    // console.log(plates[2][3].color)
    // plates[2][3].color = 'rgba(0,0,199,1)';
    // plates[2][3].drawBoard();
    // console.log(plates[2].color)
    // checkIfStarted();

    // let gameRunning = this.gameRunning;

    // while(gameRunning){
    //     this.checkUserEvent();
    // }

}
let gameRunning = false;
let plates = [];

gameLoop();