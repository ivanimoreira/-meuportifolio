  let projetos = [
{
nomeprojetos : "Projeto Web",
ImgProjeto :https://github.com/ivanimoreira
},
{
    nomeProjeto : "Projeto Aplicativo",
    imgProjeto :
}






]
let idProjetos = document.getElementById("projetos")

projetos.map((e)=>{
    //Aqui criamos o Card de cada Projeto
let cardProjeto = document.createElement("div");

//Aqui criamos o nome de cada projeto
let nomeProjeto = document.createElement("h3");

//Aqui criamos a imagem de cada projeto
nomeProjeto.textContent = e.nomeProjeto;
let imgProjeto = document.createElement("img");
imgProjeto.src = e.imgProjeto;
imgProjeto.style.width =  "100px"

cardProjeto.appendChild(nomeProjeto);
idProjetos.appendChild(imgProjeto);
cardProjeto.appendChild(cardProjeto);

})  let projetos = ´
