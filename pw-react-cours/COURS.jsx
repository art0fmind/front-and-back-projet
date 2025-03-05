// pour creer un composant react ici Bienvenue "B" la premiere lettre du nom du composant en capital
// le code jsx est entre les parentheses du return
// on ne peut returner qu'une seule balise parente ici div 
// on utilise "className" au lieu de "class" pour donner une class a une balise
function Bienvenue(){
    return(
        <div className="container">
            <h1>Salut c'est Cedric</h1>
            <p>Bienvenue dans ce memento</p>
        </div>
    )
}


// on peut utiliser ce composant "Bienvenue" dans un autre composant
export default function App(){
    return(
        <>
             <Bienvenue />
             {/* Autres composants ou du JSX */}
        </>
    )
}


// utilisation de donnee ici props
function Profile(props){
    return(
        <div>
            <h1>{props.nom}</h1>
            <p>{props.description}</p>
        </div>
    )
}


// condition 
function MyApp(){
    let contenu
    if(utilisateurConnecte){
        contenu = <PanneauAdmin/>
    }else{
        contenu = <FormulaireConnexion/>
    }
    return(
        <div>
            {contenu}
        </div>
    )
}

// condition avec l'operateur ternaire
// si utilisateurConnecte = true faire <PanneauAdmin/> sinon faire <FormulaireConnecion/>
function MyApp(){
    return(
        <div>
            {utlisateurConnecte?<PanneauAdmin/>:<FormulaireConnexion/>}
        </div>
    )
}

// condition simple avec &&
// si utilisateurConnecte = true faire <PanneauAdmin/> sinon rien ne se passe
function MyApp(){
    return(
        <div>
            {utlisateurConnecte&&<PanneauAdmin/>}
        </div>
    )
}


// liste
// quand on creer une liste en react chaque elements de la liste doit avoir une key unique key={...}
const produits=[
    {titre:'Chou',id:1},
    {titre:'Ail',id:2},
    {titre:'Pomme',id:3},
];
function ProductsList(){
    const elementsListe = produits.map(produit =>
        <li key={produit.id}>
            {produit.titre}
        </li>
    )
    return(
        <ul>{elementsListe}</ul>
    )
}


// interaction et gestionnaire d'evenements
// ici on creer on composant qui contient la fonction qui est appeler "gererClic"  lorsqu'on clique sur le boutton  " onClick={gererClic} "
function MonBouton(){
    function gererClic(){
        alert('Alert')
    }
    return(
        <button onClick={gererClic}>
            Clique!
        </button>
    )
}



// mettre a jour, et utilisations des states
// exemple avec un compteur de clique
function MonBouton(){
    // pour creer un state ou etat, ceci permet de creer une variable compte et une fonction setCompte qui permet de changer la variable compte, on initealise ici a zere
    const[compte, setCompte]=useState(0);
    function gererClic(){
        setCompte(compte + 1)
    }
    return(
        <button onClick={gererClic}>
            Clique {compte} fois!
        </button>
    )
}
// pour creer un etat commun a plusieur composant on peut faire ceci
function MonBouton({compte, gererClic}){
    return(
        <button onClick={gererClic}>
            Clique {compte} fois!
        </button>
    )
}
function MyApp(){
    const[compte, setCompte]=useState(0);
    function gererClic(){
        setCompte(compte + 1)
    }
    return(
        <div>
            <MonBouton compte={compte} onClick={gererClic} />
            <MonBouton compte={compte} onClick={gererClic} />
        </div>
    )
}


// les hooks
// les hooks sont des fonctions special en react qui te permettent d'utiliser des fonctionnalites de react dans tes composants
// par exemple: useState(), useEffect(), ect. voir la doc de react
// conseil ne jamais appeler un hooks dans une boucle, conditions ou fonction inmbriquee, toujours au debuts d'un composant ou d'un autre hooks


