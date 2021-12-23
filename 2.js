class MediaClass {
    constructor(film) {
        this.film = film;
        this.book = { book1: "book1", book2: "book2" }
    }
}

let media = new MediaClass({ film1: "film1", film2: "film2", film3: "film3" })

media.book.book3 = "book3";
media.film.film4 = "film4"

console.log("myBook :", media.book)
console.log("myFilm :", media.film)