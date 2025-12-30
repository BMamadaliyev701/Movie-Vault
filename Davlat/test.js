//-------1-------
// let book = {
//     title: "davlat",
//     author: "norbotayev",
//     year: "1990"
// };
// book.genres = ["davlat", "norbotayev", "o'zbek"];
// book.year = 2022;
// delete book.author;
// console.log (book)
//-------2------
// let person = {
//     name: "Davlat",
//     age: 13,
//     greet: function() {
//         console.log("Salom, mening ismim  " + this.name + " va men " + this.age + " yoshdaman.");
//     }
// };
//-------3------
// let user = {
//     firstName: "Jon",
//     sayHi() {
//     console.log("user.sayHi():", this.firstName);
//     }
// };

// user.sayHi();

// let sayHiAlias = user.sayHi;
// sayHiAlias(); 

// function globalSayHi() {
//     console.log("globalSayHi():", this);
// }

// globalSayHi(); 

//-----4-----
// const library = {
// name: "Markaziy Kutubxona",
// address: {
//     street: "Mustaqillik ko'chasi",
//     city: "Toshkent",
//     zipCode: "100000"
// },
// books: [
//     { title: "JavaScript Asoslari", pages: 300 },
//     { title: "Web Dasturlash", pages: 250 }
// ]
// };

// console.log("Kutubxona shahri:", library.address.city);
// console.log("Birinchi kitob nomi:", library.books[0].title);

//------5-----
// const playlist = {
//     name: "Sevimli qo'shiqlar",
//     songs: [
//     { title: "kimlar blan", artist: "ozim" },
//     { title: "gul", artist: "jony" },
//     { title: "kamin", artist: "men" }
//     ]
// };

// playlist.songs.forEach(song => {
//     console.log(`Qo'shiq nomi: ${song.title}, Ijrochi: ${song.artist}`);
// });

//----6-----

// const car = {
//     brand: "Toyota",
//     engine: {
//     type: "Benzin",
//     volume: 2.0
// }
// };

// const copiedCar = { ...car };
// copiedCar.brand = "Honda";
// copiedCar.engine.type = "Dizel";

// console.log("Original car:", car);
// console.log("Copied car:", copiedCar);