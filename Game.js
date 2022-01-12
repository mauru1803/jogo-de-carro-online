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
    }
    play(){
        formulario.hide();
        textSize(30);
        text("o jogo começou",100,100);
        Player.pegaInfoJogador();
        if(jogadores!== undefined){
        var mostraPosicao=130;
        for(var j in jogadores){
            if(j=="player"+player.indice)
            fill("red");
            else{
                fill("black");
            }
            mostraPosicao+=20;
            textSize(15);
            text(jogadores[j].nome+": "+jogadores[j].distancia,120,mostraPosicao)
        }    
        }
        if(keyIsDown(UP_ARROW)&&player.indice!== null){
            player.distancia+=50;
            player.update();
        }
    }

}  