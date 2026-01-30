const setaDaPergunta = document.querySelectorAll(".item")

setaDaPergunta.forEach((seta) => {
  
    seta.addEventListener("click", function(){
        const itemAtivo = document.querySelector(".ativo");

        seta.classList.add("ativo");

        if(itemAtivo){
            itemAtivo.classList.remove("ativo");
        }
        
    })
})
