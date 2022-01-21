class Formulario{
    constructor(){
        this.entrada=createInput("enter your name");
        this.botao=createButton("go");
        this.sejaBemVindo=createElement('h2');
        this.jogoDeCorrida=createElement('h2');
    }
    esconder(){
        this.entrada.hide();
        this.botao.hide();
        this.sejaBemVindo.hide();
        this.jogoDeCorrida.hide();
    }


    mostrar(playerCount){
        
        this.jogoDeCorrida.html("jogo de corrida");
        this.jogoDeCorrida.position(displayWidth/2-50,0);

        
        this.entrada.position(displayWidth/2-40,displayHeight/2-80);
        this.botao.position(displayWidth/2+30,displayHeight/2);

        this.botao.mousePressed(()=>{
            this.entrada.hide();
            this.botao.hide();  

            player.nome=this.entrada.value();

            playerCount=playerCount+1;
            player.indice=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.sejaBemVindo.html("ola,seja bem vindo "+player.nome);
            this.sejaBemVindo.position(displayWidth/2-70,displayHeight/4);
        })
    }
}