var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")
var setadireita = window.document.getElementById("seta-direita")


function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaesquerda.style = "display:flex; margin-top: 55px"
    setadireita.style= "display:none"

}

function RolarParaEsquerda(){
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaesquerda.style = "display:none"
    setadireita.style= "display:flex"
    

}