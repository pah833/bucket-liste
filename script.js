const reve=document.getElementById("reve");
const btnReve=document.getElementById("btnReve");
const listeReves=document.getElementById("listeReves");

const projet=document.getElementById("projet");
const btnProjet=document.getElementById("btnProjet");
const listeProjets=document.getElementById("listeProjets");


let projets=[];
let reves=[];


btnProjet.addEventListener("click",function(){
  projets.push(projet.value);

  const element=document.createElement("p");
  element.textContent=projet.value;
  listeProjets.appendChild(element);
  
  projet.value="";

})


btnReve.addEventListener("click", function(){
  reves.push(reve.value);

  const para=document.createElement("p");
  para.textContent=reve.value;
  listeReves.appendChild(para);

  reve.value="";

})

























































