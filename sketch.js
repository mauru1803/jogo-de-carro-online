var canvas;
var fundo;
var database;
var gameState=0;
var playerCount=0;
var formulario;
var game, player;
var jogadores;
var carros, carro, carro2, carro3, carro4;
var distancia=0;
var car1, car2, car3, car4, ground, track1 ,track;

function preload(){
    track1=loadImage("track1.jpg");
    car1=loadImage("car1.png");
    car2=loadImage("car2.png");
    car3=loadImage("car3.png");
    car4=loadImage("car4.png");
    ground=loadImage("ground.png");
    track=loadImage("track.png");
}

function setup(){
    database=firebase.database();
    canvas=createCanvas(displayWidth-20,displayHeight-30);
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
    if(gameState==2){
        game.end();
    }
    drawSprites();
}
function end(){
    console.log("game over");
}
