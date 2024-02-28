const barraDePesquisa = document.querySelector(".pesquisar__input");
const botaoBarraDePesquisa = document.querySelector(".pesquisar__botao");

botaoBarraDePesquisa.addEventListener("click", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != ""){
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

        }
    } else {
        window.location.href = "index.html";
        video.style.display = "block";
    }

}

