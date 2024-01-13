function semana(){
    var num = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');

var resto = (num%7);

    if(Number(num>7)){
        resposta.innerHTML='Escolha um número de 1 a 7';
    }
    else if(resto==1){
        resposta.innerHTML='Domingo';
    }
    else if(resto==2){
        resposta.innerHTML='Segunda';
    }
    else if(resto==3){
        resposta.innerHTML='Terça';
    } else if(resto==4){
        resposta.innerHTML='Quarta';
    } else if(resto==5){
        resposta.innerHTML='Quinta';
    } else if(resto==6){
        resposta.innerHTML='Sexta';
    } else if(resto==7){
        resposta.innerHTML='Sabado';
    } 
        
}