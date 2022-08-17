const condicaoVitoria = [
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

}