'use strict'

const blocos = document.getElementsByTagName('div')
const playAgain = document.getElementById('botao')
const aviso = document.getElementById('p')
const vencTxt = document.getElementById('vencedor')
const finalMsg = document.querySelector('.msg')
let vencedor;
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
        document.getElementById(bloco.target.id).removeEventListener('click',jogar)
    }else  if(jogador == 1){
        bloco.target.textContent = 'O'
        jogador = 0
        document.getElementById(bloco.target.id).removeEventListener('click',jogar)
    }
    atualizarAviso()
    resultado()
  
}
const declararVencedor = ()=>{
    if(vencedor == 2){
        vencTxt.textContent = 'O Vencedor é o jogador O!'
    }else if(vencedor == 1){
        vencTxt.textContent = 'O Vencedor é o jogador X!'
    }else{
        vencTxt.textContent = 'A partida resultou em empate!'
    }
    finalMsg.style.display='flex'
}
const resultado = () =>{
    if(
        blocos[0].textContent == 'X' && blocos[1].textContent =='X' && blocos[2].textContent=='X'||
        blocos[3].textContent == 'X' && blocos[4].textContent =='X' && blocos[5].textContent=='X'||
        blocos[6].textContent == 'X' && blocos[7].textContent =='X' && blocos[8].textContent=='X'||
        blocos[0].textContent == 'X' && blocos[4].textContent =='X' && blocos[8].textContent=='X'||
        blocos[6].textContent == 'X' && blocos[4].textContent =='X' && blocos[2].textContent=='X'||
        blocos[1].textContent == 'X' && blocos[4].textContent =='X' && blocos[7].textContent=='X'||
        blocos[0].textContent == 'X' && blocos[3].textContent =='X' && blocos[6].textContent=='X'||    
        blocos[2].textContent == 'X' && blocos[5].textContent =='X' && blocos[8].textContent=='X'   
    ){
        vencedor = 1
        declararVencedor()
        desativarEvento()
    }else if(
        blocos[0].textContent == 'O' && blocos[1].textContent =='O' && blocos[2].textContent=='O'||
        blocos[3].textContent == 'O' && blocos[4].textContent =='O' && blocos[5].textContent=='O'||
        blocos[6].textContent == 'O' && blocos[7].textContent =='O' && blocos[8].textContent=='O'||
        blocos[0].textContent == 'O' && blocos[4].textContent =='O' && blocos[8].textContent=='O'||
        blocos[6].textContent == 'O' && blocos[4].textContent =='O' && blocos[2].textContent=='O'||
        blocos[1].textContent == 'O' && blocos[4].textContent =='O' && blocos[7].textContent=='O'||
        blocos[0].textContent == 'O' && blocos[3].textContent =='O' && blocos[6].textContent=='O'||    
        blocos[2].textContent == 'O' && blocos[5].textContent =='O' && blocos[8].textContent=='O'    
    ){
        vencedor = 2
        declararVencedor()
        desativarEvento() 
    }else if(  
        blocos[0].textContent != '' && blocos[1].textContent !='' && blocos[2].textContent!=''&&
        blocos[3].textContent != '' && blocos[4].textContent !='' && blocos[5].textContent!=''&&
        blocos[6].textContent != '' && blocos[7].textContent !='' && blocos[8].textContent!=''
    ){
        declararVencedor()
        desativarEvento()
    }
}

function inicia(){
    finalMsg.style.display='none'
    vencedor = 0
    defineJogador()
    ativarEvento()
    atualizarAviso()
    for(let i = 0; i<blocos.length;i ++){
        blocos[i].textContent=''
    }
    
}
window.addEventListener('load',inicia)
playAgain.addEventListener("click",inicia)

/*const condicaoVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]
const checandoVitoria =  () =>{
    if(condicaoVitoria.map(element => element.map(
            inEl => {
                blocos[inEl].textContent != ''
            }
        ))
    ){
        return element
    }
    if (element.every(element => element.textContent = 'X')){
        alert('O Vencedor é o jogador X!')
    }else if(element.every(element => element.textContent = 'O')){
        alert('O Vencedor  o jogador O!')
    }   

}*/

