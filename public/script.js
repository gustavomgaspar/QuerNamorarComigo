var contador = 0;
const frases = [""]
function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function btn(){ 
    const sim = document.querySelector("#sim");
    const nao = document.querySelector("#nao");
    const perguntas = document.querySelector("div");
    const vermelho = document.querySelector(".vermelho")
    const verde = document.querySelector(".verde")
    
    

    if(contador > 2){

        let teste = random(0,1);
        console.log(teste);
        if( teste == 0 ){
            sim.classList.replace('verde','vermelho');
            nao.classList.replace('vermelho','verde');
        } else if(teste == 1 ){
            sim.classList.replace('vermelho','verde');
            nao.classList.replace('verde','vermelho');
        }
    }

    if(contador > 4 ){
        let teste = random(0,1);
        if( teste == 0 ){
            perguntas.classList.replace('resposta','revresposta');
        } else if(teste == 1 ){
            perguntas.classList.replace('revresposta','resposta');
        }
    }
    
    if(contador > 6){
        let teste = random(0,3);

        vermelho.style.setProperty('position','absolute');
        
        
        let novaAltura = random(0, 500 -10 ) + 'px';
        let novaLargura = random(0, 300 -10 ) + 'px';


        vermelho.style.setProperty('top',novaAltura);
        vermelho.style.setProperty('left',novaLargura);

        if( teste == 0 ){
            
        verde.style.setProperty('position','absolute');
        
        let novaAltura = random(0, 500 -10 ) + 'px';
        let novaLargura = random(0, 300 -10 ) + 'px';

        verde.style.setProperty('top',novaAltura);
        verde.style.setProperty('left',novaLargura);
        }

    
    }
    if(contador == 1){document.getElementById('bla').innerHTML = "EU PERDOU ESSE ERRO "}else if(contador == 3){document.getElementById('bla').innerHTML = "DIFICIL GOSTEI"}else if(contador == 5){document.getElementById('bla').innerHTML = "ACEITA NAO VAI DOER"}else if(contador == 6 ){document.getElementById('bla').innerHTML = "ISSO É INEVITAVEL"}


    contador++
}


function btnsim(){
console.log('apertou no sim');
document.getElementById('bla').innerHTML = "S2 | prata fina ?"
let reg = contador.toString();
const url = 'https://127.0.0.1:3000/reg/' + reg;

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();

}
