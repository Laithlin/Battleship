class Battleship{
    private playerCanvas: HTMLCanvasElement;
    private aiCanvas: HTMLCanvasElement;
    private playerContex: CanvasRenderingContext2D;
    private aiContex: CanvasRenderingContext2D;

    private playerDraw() {
        let ctx = this.playerContex;
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                ctx.beginPath();
                ctx.fillStyle = 'rgba(0,150,50,1)';
                ctx.rect(10 + 60*i , 10 + 60*j, 50, 50);
                ctx.fill();
            }
        }
    }

    private aiDraw() {
        let ctx = this.aiContex;
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                ctx.beginPath();
                ctx.fillStyle = 'rgba(50,100,150,1)';
                ctx.rect(10 + 60*i , 10 + 60*j, 50, 50);
                ctx.fill();
            }
        }
    }

    private checkUserEvent() {

    }
    public gameLoop() {
        let gameRunning = true;

        while(gameRunning){
            this.checkUserEvent();
        }

    }


    constructor() {
        this.playerCanvas = document.getElementById('playerField') as HTMLCanvasElement;
        this.aiCanvas = document.getElementById('aiField') as HTMLCanvasElement;
        this.playerContex = this.playerCanvas.getContext('2d');
        this.aiContex = this.aiCanvas.getContext('2d')

        this.playerDraw();
        this.aiDraw()


    }
}

let battleship = new Battleship();
battleship.gameLoop();