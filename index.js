'use strict'

const blocos = document.getElementsByTagName('div')
const playAgain = document.getElementById('botao')
const aviso = document.getElementById('p')
let jogador;

const defineJogador = () =>{
    jogador = Math.round(Math.random()*1)
}
const atualizarAviso = () =>{
    if(jogador==0){
        aviso.textContent = 'É a vez do jogador: X'
    }else{
        aviso.textContent = 'É a vez do jogador: O'
    }
}
const ativarEvento= () =>{
    for(let i = 0; i<blocos.length;i ++){
        blocos[i].addEventListener('click',jogar)
    }
}

const desativarEvento = () => {
    for(let i = 0; i<blocos.length;i ++){
        blocos[i].removeEventListener('click',jogar)
    }
}
const jogar = (bloco) =>{
    if(jogador == 0){
        bloco.target.textContent = 'X'
        jogador = 1
        atualizarAviso()
        resultado()
        document.getElementById(bloco.target.id).removeEventListener('click',jogar)
    }else  if(jogador == 1){
        bloco.target.textContent = 'O'
        jogador = 0
 
        atualizarAviso()   
        resultado()
        document.getElementById(bloco.target.id).removeEventListener('click',jogar)
    }
}
const resultado = ()=> {
    if(
        blocos[0].innerHTML == 'X' && blocos[1].innerHTML == 'X'&& blocos[2].innerHTML == 'X'||
        blocos[3].innerHTML == 'X' && blocos[4].innerHTML == 'X'&& blocos[5].innerHTML == 'X'||  
        blocos[6].innerHTML == 'X' && blocos[7].innerHTML == 'X'&& blocos[8].innerHTML == 'X'|| 
        blocos[0].innerHTML == 'X' && blocos[4].innerHTML == 'X'&& blocos[8].innerHTML == 'X'||
        blocos[6].innerHTML == 'X' && blocos[4].innerHTML == 'X'&& blocos[2].innerHTML == 'X'
        ){
        desativarEvento()
        alert('O vencedor é o jogador: X')
    }else if(
        blocos[0].innerHTML == 'O' && blocos[1].innerHTML == 'O' && blocos[2].innerHTML == 'O'||
        blocos[3].innerHTML == 'O' && blocos[4].innerHTML == 'O' && blocos[5].innerHTML == 'O'||  
        blocos[6].innerHTML == 'O' && blocos[7].innerHTML == 'O' && blocos[8].innerHTML == 'O'|| 
        blocos[0].innerHTML == 'O' && blocos[4].innerHTML == 'O' && blocos[8].innerHTML == 'O'||
        blocos[6].innerHTML == 'O' && blocos[4].innerHTML == 'O' && blocos[2].innerHTML == 'O'
    ){
        desativarEvento()
        alert('O vencedor é o jogador: O')
    }else if(
        blocos[0].innerHTML != '' && blocos[1].innerHTML != '' && blocos[2].innerHTML != ''&&
        blocos[3].innerHTML != '' && blocos[4].innerHTML != '' && blocos[5].innerHTML != ''&&  
        blocos[6].innerHTML != '' && blocos[7].innerHTML != '' && blocos[8].innerHTML != ''
    ){
        desativarEvento()
        alert('O jogo empatou!')
    }
}

function inicia(){
    defineJogador()
    ativarEvento()
    atualizarAviso()
    for(let i = 0; i<blocos.length;i ++){
        blocos[i].textContent=''
    }
    
}
window.addEventListener('load',inicia)
playAgain.addEventListener("click",inicia)