// on recupere les elements html auquel on avait donnee un id
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// on vas creer une fonction dans laquelle on vas faire l'appel a api
let getMovie = () => {
    //on recupere le nom du film
    let movieName = movieNameRef.value;
    // t=${movieName}&apikey=${key}  c'est le nom du film et la variable apikey qu'on a creer dans le fichier key.js
    // j'ai utiliser des backtick `` pour mettre le lien et non des un apostrophe '
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    // si le champ input est vide
    if(movieName.length <= 0){
        // backtick ``
        result.innerHTML = `<h3 class="msg">Merci d'entrer un nom de film</h3>`
    }else{
        fetch(url).then((response) => response.json()).then((data) => {
            console.log(data);
            // si le filme existe dans la base de donnees
            if(data.Response == "True"){
                // backtick ``
                result.innerHTML = `
                        <div>
                        
                        </div>
                    <div class="info">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="assets/star-icon.svg" alt="star">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                            <div class="content">
                                <h3>Plot</h3>
                                <p>${data.Plot}</p>
                                <h3>Cast</h3>
                                <p>${data.Actors}</p>
                            </div>
                        </div>
                        <img src=${data.Poster} class="poster">
                    </div>
                `
            }
            // si le film n'existe pas dans la base de donnees
            else{
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
            }
        }).catch(() => {
            result.innerHTML = `<h3 class="msg">Il y a eu une erreur!</h3>`
        })
    }
}

searchBtn.addEventListener("click", getMovie);

// quand on recharge la page ca appel getMovie
window.addEventListener("load", getMovie);
