console.log("working");

class Movie{
    constructor(title,studio,rating){
        this.title=title,
        this.studio=studio,
        this.rating=rating||"PG"

    }
    getPG(){
        console.log(`
        The Name of the Movie ${this.title},
        The Movie is produced by ${this.studio},
        The Rating of the movie is :${this.rating}
        
        `)
    }

}

let CasinoRoyal =new Movie("Casino Royale","Eon Productions","PG­13")
console.log(CasinoRoyal);
CasinoRoyal.getPG()

//if rating is not given

let newMovie=new Movie("Casino Royale","Eon Productions");
console.log(newMovie);
newMovie.getPG();

