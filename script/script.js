const movie = [
    {
        "judul": "Batman Begins (2005)", 
        "rating": "Rating: 8.2", 
        "deskripsi": "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.", 
        "poster": "./poster-img/batman begin.jpg"
    }, 
    {
        "judul": "Black Panther (2018)", 
        "rating": "Rating: 7.3" , 
        "deskripsi": "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.", 
        "poster":"./poster-img/black panther.png"
    },
    {
        "judul": "Crimes of Grindelwald (2018)", 
        "rating": "Rating: 6.5", 
        "deskripsi": "Gellert Grindelwald plans to raise an army of wizards to rule over non-magical beings. In response, Newt Scamander's former professor, Albus Dumbledore, seeks his help to stop him.", 
        "poster": "./poster-img/grindelwald.jpg"
    },
    {
        "judul": "Frozen 2 (2019)", 
        "rating": "Rating: 6.8", 
        "deskripsi": "Queen Elsa begins to hear a mysterious melodic voice calling to her. Unsettled, she answers it, thus awakening the elemental spirits and setting into motion a quest to restore an old injustice.", 
        "poster": "./poster-img/frozen2.jpeg"
    },
    {
        "judul": "Corpse Bride (2005)", 
        "rating": "Rating: 7.3", 
        "deskripsi": "When Victor is practising his wedding vows in the woods, he accidentally gets married to a skeleton-like creature called Emily who whisks him off to the land of the dead.", 
        "poster": "./poster-img/corpse_bride.jpg"
    },
    {
        "judul": "Fast and Furious 8 (2017)", 
        "rating": "Rating: 6.6", 
        "deskripsi": "Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. The crew has to reunite to stop Cipher and save the man who brought them together as a family.", 
        "poster": "./poster-img/ff8.jpg"},
    {
        "judul": "Murder on the Orient Express (2017)", 
        "rating": "Rating: 6.5", 
        "deskripsi": "After a murder takes place on a train journey, a detective decides to investigate and find the culprit amongst the passengers aboard. In the process, he also learns the true identity of the victim.", 
        "poster": "./poster-img/muder_on_the_orient_express.jpg"
    },
    {
        "judul": "Inferno (2016)",
        "rating": "Rating: 6.2",
        "deskripsi": "After waking up with amnesia in a hospital, Robert Langdon teams up with Sienna Brooks, one of his doctors, to protect the world from the evil plan of a mad scientist.",
        "poster": "./poster-img/inferno.jpeg"
    },
    {
        "judul": "Jurassic World: Fallen Kingdom (2018)",
        "rating": "Rating: 6.2",
        "deskripsi": "After a volcano eruption proves to be a threat for the dinosaurs, Owen and Claire reach the defunct Jurassic World, a theme park, to save the animals from extinction.",
        "poster": "./poster-img/jurassic-world-poster.jpg"
    },
    {
        "judul": "A Whisker Away (2020)",
        "rating": "Rating: 7.4",
        "deskripsi": "The line between human and animal starts to blur after a girl transforms herself into a cat.",
        "poster": "./poster-img/a_whisker_away.jpg"
    }
]

function renderList(){
    for (let i in movie){
        // Membuat elemen dengan div tag, sesuai desain, kemudian menambahkan class sesuai desain juga
        var anchor_title = document.createElement("a");
        anchor_title.href = "./page/movie.html" + "?var1=" + i;
        var anchor_poster = document.createElement("a");
        anchor_poster.href = "./page/movie.html" + "?var1=" + i;
        var content = document.createElement("div");
        content.className += " content"
        var title = document.createElement("div");
        title.className += " title";
        var rating = document.createElement("div");
        rating.className += " rating";
        var description = document.createElement("div");
        description.className += " description";
        var poster = document.createElement("div");
        poster.className += " poster";
        var img = document.createElement("img");
        // append anchor_title ke dalam title dulu baru nanti anchor di isi judul
        title.appendChild(anchor_title)
        // Menambahkan source dan alt dan class dari tag img
        img.className += "list-img";
        img.src = movie[i].poster;
        img.alt = movie[i].judul;
        poster.appendChild(img);
        // Menambahkan teks sesuai dia elemen apa
        anchor_title.innerHTML = movie[i].judul;
        rating.innerHTML = movie[i].rating;
        description.innerHTML = movie[i].deskripsi;
        // append poster ke dalam anchor_poster
        anchor_poster.appendChild(poster);
        // Append all of the created title, etc to the content
        content.appendChild(title);
        content.appendChild(rating);
        content.appendChild(description);
        content.appendChild(anchor_poster);
        // append the content to the container
        document.getElementById("container").appendChild(content);
    }
}

function getParams() {
    var idx = document.URL.indexOf('?');
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
            for (var i=0; i<pairs.length; i++) {
                nameVal = pairs[i].split('=');
            }
        }
    return Number(nameVal[1]);
}

function renderMoviePage(index){
    // membuat element sesuai desain
    var poster = document.createElement("div");
    poster.id += "poster-container";
    var posterimg = document.createElement("img");
    // set id, src, dan alt dari gambar poster (posterimg)
    posterimg.id += "movie-poster";
    posterimg.src = "." + movie[index].poster;
    posterimg.alt = movie[index].judul;
    var title = document.createElement("div");
    title.id += "movie-title";
    var description = document.createElement("div");
    description.id += "movie-description";
    // Mengisi elemen dengan teks
    title.innerHTML = movie[index].judul;
    description.innerHTML = movie[index].deskripsi;
    //append posterimg ke poster
    poster.appendChild(posterimg);
    // append content ke element container
    document.getElementById("content-container").appendChild(poster);
    document.getElementById("content-container").appendChild(title);
    document.getElementById("content-container").appendChild(description);
}