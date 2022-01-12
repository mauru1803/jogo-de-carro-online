class Player{
    constructor(){
        this.indice=null;
        this.distancia=0;
        this.nome=null;
    }
    verJogador(){
        var PlayerCountRef=database.ref('playerCount');
        PlayerCountRef.on("value",(data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var indicedojogador="players/player"+this.indice;
        database.ref(indicedojogador).set({
            nome: this.nome,
            distancia : this.distancia
        })
    }
    static pegaInfoJogador(){
        var playerInfoRef=database.ref('players');
        playerInfoRef.on("value",(data)=>{
        jogadores=data.val();
        })
    }
}
    