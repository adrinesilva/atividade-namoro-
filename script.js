const btnSim  = document.getElementById("btnSim")
const btnNão  = document.getElementById("btnNao")

function aceitar(){
alert("Você aceitou namorar comigo! :)")
location.href = "https://youtu.be/SETK2maosQY"
}

function desviar(){
    btnNão.style.position = "absolute";
}

function geraPosicao(min, max){
    return (Math.random() * (max-min) + min) + "%";
}