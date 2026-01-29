const setaDaPergunta = document.querySelectorAll(".item")
const txtDaResposta = document.querySelectorAll(".resposta")

setaDaPergunta.forEach((seta, i) => {
    seta.addEventListener("click", function(){
        txtDaResposta[i].classList.toggle("ativo")
        setaDaPergunta[i].classList.toggle("ativo")
    })
}
)
