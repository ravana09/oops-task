console.log("working");

class Movie {
    constructor(title, studio, rating) {
        this.title = title,
            this.studio = studio,
            this.rating = rating || "PG"

    }
    getPG() {
        console.log(`
        The Name of the Movie ${this.title},
        The Movie is produced by ${this.studio},
        The Rating of the movie is :${this.rating}
        
        `)
    }

}

let CasinoRoyal = new Movie("Casino Royale", "Eon Productions", "PG­13")
console.log(CasinoRoyal);
CasinoRoyal.getPG()

//if rating is not given

let newMovie = new Movie("Casino Royale", "Eon Productions");
console.log(newMovie);
newMovie.getPG();

//write  a person details

class Person {
    constructor(firstName, lastName, age, address, education, experience,) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.address = address
        this.education = education
        this.experience = experience
    }
    getDetails() {
        console.log(`
        Hi I am ${this.firstName}${this.lastName},i am a ${this.age} years,
        i live at ${this.address},
        i have completed ${this.address}and
        my work experience is ${this.experience}
        
        `)
    }
}

let pradeep = new Person("pradeep", "sathish", 22, "salem", "BSC chemistry", "2years experience in Health inspector")
console.log(pradeep)

pradeep.getDetails();

//uber price 

class UberPrice {
    constructor(place, kilometer, price) {
        this.place = place
        this.kilometer = kilometer
        this.price = price||10
        

    }
    
    priceDetails() {
        let bookingCharges=25;
        if (this.kilometer <= 10) {
            console.log(`
            DROP LOCATION ;${this.place},
            TOTAL COST :${this.kilometer * this.price+bookingCharges}`)
        } else if (this.kilometer > 10 && this.kilometer <30) {
            console.log(`
            DROP LOCATION ;${this.place},
            TOTAL COST :${this.kilometer * (this.price + 5)+bookingCharges}`)
        } else{
            console.log(`
            DROP LOCATION ;${this.place},
            TOTAL COST :${this.kilometer * (this.price + 8)+bookingCharges}`)
        
        }
    }


}

let orderOne = new UberPrice("salem", 31,10)
console.log(orderOne.kilometer)
orderOne.priceDetails()



//CIRCLE

class Circle{
    constructor(radius,color){
        this._radius=radius
        this._color=color

    }

    double(){
        this._radius*2
    }

    get radius(){
       return this._radius
    }

    get color(){
       return this._color
    }
    
    set radius(newRadius) {
        if (newRadius > 0) {
          this._radius = newRadius;
        } else {
          console.error("Radius must be a positive number");
        }
      }

    getCircle(){
        console.log(this._radius,this._color)
    };

    calculateArea() {
        console.log( Math.PI * Math.pow(this._radius, 2));
      };

      calculateCircumference() {
        console.log( 2 * Math.PI * this._radius);
      };

    toString(){
        console.log( `Circle with radius ${this._radius},and the color is ${this._color}`);
      }
}

let circle =new Circle(1.0,"red")

console.log(circle.radius)
console.log(circle.color)
circle.getCircle()
circle.toString()
circle.calculateCircumference()
circle.calculateArea()

