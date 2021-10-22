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
        // Menambahkan source dan alt dari tag img
        img.src = movie[i].poster;
        img.alt = movie[i].judul;
        poster.appendChild(img);
        // Menambahkan teks sesuai classnya
        title.innerHTML = movie[i].judul;
        rating.innerHTML = movie[i].rating;
        description.innerHTML = movie[i].deskripsi;
        // Append all of the created title, etc to the content
        content.appendChild(title);
        content.appendChild(rating);
        content.appendChild(description);
        content.appendChild(poster);
        // append the content to the container
        document.getElementById("container").appendChild(content);
    }
}
