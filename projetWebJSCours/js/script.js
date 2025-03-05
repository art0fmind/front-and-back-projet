// la porter des variables
var name = "cedric"; // porter global
let surname = "midianga"; // porter local dans les accolades
const PI = 3.14; // constante


// les types de variables
var test; // undefined
var name = "cedric"; // String
var note = 10; // Number
var moyenne = 11.5; // Number
var pi = 3.14; // Number
var valid = true; // Boolean
var rien = null; // est une valeur special qui n'a pas de type


// conditions
let age = 18;
if(age < 18){
    console.log("vous etes mineurs ");
}else if(age == 18){
    console.log("vous vennez d'avoir 18 ans.");
}else{
    console.log("vous etes majeur");
}

// boucles
///for
for(let i = 0; i < 3; i++){
    console.log("Numero "+i);
}

///while
let i=0;
while(i<3){
    console.log("Numero "+i);
    i++;
}

// fonctions
function salutation(nom){
    return "Bonjour" + nom;
}

function salutmoi(nom){
    console.log("Bonjour "+nom);
}

function salut(){
    console.log("Bonjour");
}

const additionner = (a,b) => a+b


// tableaux
let desfruits = ["pomme","banane","cerise"];


// objets
let voiture = {
    marque:"Toyota",
    modele:"Corolla",
    annee:2020
};



// selectionner des balises html et les manipuler
let titre = document.querySelector("h1") // vas selectionner la premiere balise h1 dans le documents html
titre.textContent = "Bienvenue sur mon site !" // pour changer le contenu de cette balise h1

titre.addEventListener("click",function(){ // ceci est un evenement que l'on souhaite ecouter puis agir en conseauent.
    alert("Merci d'avoir clique sur le titre!")
}) /* addEventListener permet d'ecouter i.e attendre qu'un evenement se produit, puis on precise l'evenement qu'on veut attendre ici "click" i.e si l'utilisateur clique sur le titre h1, puis ce que l'on veut faire si cette evenement se produit, ici executer le fonction creer qui affiche "Merci d'avoir clique sur le titre!"*/



// les promesses
/// utilisations
let maPromesse = new Promise((resolve, reject) => {
    // ici tu mets le code qui fait quelque chose d'asynchrone
    // si tout se passe bien, tu appelles resolve()
    // si quelque chose se passe mal tu appelles reject()
});
/// la fonction fetch est tres utilise dans ce cas
fetch('https://api.exemple.com/data') // l'address de la donnee que l'on veut aller chercher sur internet
    .then(response => response.json()) // on recupere et transforme la reponse au format json
    .then(data => { // si tout se passe bien ...
        console.log(data)
    })
    .catch(error => { // si quelque chose se passe mal ...
        console.error("il y a un probleme avec l'operation fetch :", error)
    })


// les operateurs
let a=5+3; // somme
let b=5-2 // difference
let c=5*2 // produit
let d=8/2 // quotient

let e = (5=="5"); // true ,compare les valeurs seulement mais pas les types
let f = (5!="6"); // true ,compare les valeurs seulement mais pas les types
let g = (5==="5"); // false ,compare les valeurs et les types
let h = (5!=="5"); // true ,compare les valeurs et les types

let j = (e && f); // true
let k = (g || h); // true
let l = !g; // true



// autres
let phrase = "Bonjour tout le monde";
let mots = phrase.split(" "); // ["Bonjour","tout","le","monde"]
let nouvellePhrase = phrase.replace("monde","peuple") // "Bonjour tout le peuple

let fruits = ["pomme","banane"];
fruits.push("orange"); // ["pomme","banane", "orange"]
let dernierFruit = fruits.pop(); // "orange"
let fruitsMajuscules = fruits.map(fruit => fruit.toUpperCase()); // ["POMME","BANANE"]
let longsfruits = fruits.filter(fruit => fruit.length > 5); // ["banane"]


// gestion des erreurs
try {
    let resultat = 2/0; // division par zero
    console.log(resultat);
} catch (error) {
    console.log("Une erreur s'est produire : "+error.message);
}finally{
    console.log("Fin de la tentative.")
}