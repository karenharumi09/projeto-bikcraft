//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a"); //seleciona oe elmentos do menu

function ativarLink(link) {
  const url = location.href;   //pega url
  const href = link.href;      //pega href
  if (url.includes(href)) {
    link.classList.add("ativo");  //add a classe ativo
  }
}

links.forEach(ativarLink);   //link de cada item do menu


//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);  //retorna um array com os parametros

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);   //procurar pelo id
  if(elemento) {                 //checar se o elemento existe
    elemento.checked = true;     //marcar o elemento 
  }
}

parametros.forEach(ativarProduto);


//Perguntas Frequentes
const perguntas  = document.querySelectorAll(".perguntas button"); //seleciona botão

function ativarPergunta(event) {
  const pergunta = event.currentTarget;  //selecionar o item pergunta
  const controls = pergunta.getAttribute("aria-controls"); //pegar valor do atributo
  const resposta = document.getElementById(controls); //procurar pelo id

  //true=pergunta aberta e false=pergunta fechada
  resposta.classList.toggle("ativa");  //add ou remove a classe
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);  
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);  //add o evento click
}

perguntas.forEach(eventosPerguntas);


//Galeria imagens
const galeria = document.querySelectorAll(".bicicletas-imagens img"); //selecionar lista
const galeriaContainer = document.querySelector(".bicicletas-imagens");
//selecionar container da galeria

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px").matches;  //verifica tam da tela
  if(media) {
    galeriaContainer.prepend(img);   //pega a img e troca de posição
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


//PLugin Animar
if (window.SimpleAnime) {//verificar se o SimpleAnime existe
  new SimpleAnime();     //ativar o plugin
}

