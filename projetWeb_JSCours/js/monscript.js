let titre = document.querySelector("h1") 
let i=1;
titre.addEventListener("click",function(){ 
    if(i==1){
        titre.textContent = "un click"
    }else{
        titre.textContent = i+" clicks"
    }
    i++;
}) /* addEventListener permet d'ecouter i.e attendre qu'un evenement se produit, puis on precise l'evenement qu'on veut attendre ici "click" i.e si l'utilisateur clique sur le titre h1, puis ce que l'on veut faire si cette evenement se produit, ici executer le fonction creer qui affiche "Merci d'avoir clique sur le titre!"*/
