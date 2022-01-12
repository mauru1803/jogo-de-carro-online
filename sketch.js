var canvas;
var fundo;
var database;
var gameState=0;
var playerCount=0;
var formulario;
var game, player;
var jogadores;

function setup(){
    database=firebase.database();
    canvas=createCanvas(500,500);
    game=new Game();
    game.verEstado();
    game.inicio();
}

function draw(){
    background("white");
    if(playerCount==4){
        game.update(1);

    }
    if(gameState==1){
        clear();
        game.play();
    }
    drawSprites();
}