class Game{
    constructor(){

    }
    verEstado(){
        var GameStateRef=database.ref('gameState');
        GameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
        
    }
    async inicio(){
        if(gameState === 0){
            player=new Player();
            var PlayerCountRef=await database.ref('playerCount').once("value");
            if(PlayerCountRef.exists()){
                playerCount=PlayerCountRef.val();
                player.verJogador();
            }
            else{
                playerCount=0;
            }
            formulario=new Formulario();
            formulario.mostrar(playerCount);
        }
        carro = createSprite(100,200);
        carro.addImage(car1);
        carro2 = createSprite(300,200);
        carro2.addImage(car2);
        carro3 = createSprite(500,200);
        carro3.addImage(car3);
        carro4 = createSprite(700,200);
        carro4.addImage(car4);
        carros=[carro,carro2,carro3,carro4];
    }
    play(){
        formulario.esconder();
        textSize(30);
        text("o jogo começou",100,100);
        Player.pegaInfoJogador();
        if(jogadores!== undefined){
            background(rgb(198,135,103))
            image(track1,0,-displayHeight*4,displayWidth,displayHeight*5)
            var indice=0;
            var x=175;
            var y;
        for(var j in jogadores){
            indice=indice+1;
            x=x+100;
            y=displayHeight-jogadores[j].distancia
            carros[indice-1].x=x;
            carros[indice-1].y=y;

            if(indice==player.indice)
            {
             carros[indice-1].shapeColor="red";
             camera.position.x=displayWidth/2;
             camera.position.y=carros[indice-1].y   
            }
        }    
        }
        if(keyIsDown(UP_ARROW)&&player.indice!== null){
            player.distancia+=10;
            player.update();
        }
        if(player.distancia>3860){
            gameState=2;
        }
        drawSprites();
    }

}  