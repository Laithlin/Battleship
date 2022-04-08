var Battleship = /** @class */ (function () {
    function Battleship() {
        this.playerCanvas = document.getElementById('playerField');
        this.aiCanvas = document.getElementById('aiField');
        this.playerContex = this.playerCanvas.getContext('2d');
        this.aiContex = this.aiCanvas.getContext('2d');
        this.playerDraw();
        this.aiDraw();
    }
    Battleship.prototype.playerDraw = function () {
        var ctx = this.playerContex;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                ctx.beginPath();
                ctx.fillStyle = 'rgba(0,150,50,1)';
                ctx.rect(10 + 60 * i, 10 + 60 * j, 50, 50);
                ctx.fill();
            }
        }
    };
    Battleship.prototype.aiDraw = function () {
        var ctx = this.aiContex;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                ctx.beginPath();
                ctx.fillStyle = 'rgba(50,100,150,1)';
                ctx.rect(10 + 60 * i, 10 + 60 * j, 50, 50);
                ctx.fill();
            }
        }
    };
    Battleship.prototype.checkUserEvent = function () {
    };
    Battleship.prototype.gameLoop = function () {
        this.checkUserEvent();
    };
    return Battleship;
}());
var battleship = new Battleship();
battleship.gameLoop();
