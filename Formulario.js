class Formulario{
    constructor(){
        this.entrada=createInput("enter your name");
        this.botao=createButton("go");
        this.sejaBemVindo=createElement('h2');
    }
    esconder(){
        this.entrada.hide();
        this.botao.hide();
        this.sejaBemVindo.hide();
    }


    mostrar(playerCount){
        var jogoDeCorrida=createElement('h2');
        jogoDeCorrida.html("jogo de corrida");
        jogoDeCorrida.position(400,50);

        
        this.entrada.position(130,160);
        this.botao.position(200,230);

        this.botao.mousePressed(()=>{
            this.entrada.hide();
            this.botao.hide();  

            player.nome=this.entrada.value();

            playerCount=playerCount+1;
            player.indice=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.sejaBemVindo.html("ola,seja bem vindo "+player.nome);
            this.sejaBemVindo.position(130,100);
        })
    }
}