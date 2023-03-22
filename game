const RESOLUTION = {
    w: 640,
    h: 360,
};
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render  });

const BALL = {
    x: RESOLUTION.w / 2,
    y: RESOLUTION.h / 2,
    w: 12,
    h: 12,
};
var counter = 0 ;
var step = Math.PI * 2 / 360 ;

const SPEED = 2;
const BALL_SPEED = {
    x: Math.random() * SPEED + -SPEED,
    y: Math.random() * SPEED + -SPEED,
};

//const game = new Phaser.Game(CONFIG);

/*const CONFIG = {
    width:RESOLUTION.w,
    height:RESOLUTION.h,
    scene:{
        preload: precarga,
        create: crear,
        update: actualiza,
        render: render
    }
};*/

let player;
let player_init_x = 64;
let player_speed;
let graphics;

function renderPlayerBall() {
    graphics.clear();
    graphics.fillStyle(0xffffff, 1);
    
    //Ball
    graphics.fillRect(BALL.x, BALL.y, BALL.w, BALL.h);
}

function preload ()
{
    game.load.image('player', 'assets/sprites/player.png');
}

function create ()
{
    //renderPlayerBall();
    player = game.add.sprite(200, 200, 'player');
    player.alpha = 0.5 ;
    player.x = game.width / 2 ;
    player.anchor.x = player.anchor.y = 0.5 ;
    player.inputEnabled = true ;

    //let player = this.add.image(64, 64, "player-img");
    //player_speed = 20;
    //player = this.physics.add.sprite(player_init_x, RESOLUTION.h/2, "ship");
}

function update ()
{
    var tStep = Math.sin( counter ) ;

    player.y = (game.height/2) + tStep * 30 ;
    player.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
    counter += step;
}

function render() {
    game.debug.pointer( game.input.activePointer );
}

