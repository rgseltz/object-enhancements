// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
  //write es2015 version using object shorthand
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
};

var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"
//write es2015 using computed property names
function instructor(firstName,favoriteNumber) {
    return {
        firstName,
        favoriteNumber
    };
};

// Object Methods
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }
// Write Object Method ES2015
let teacher = {
    firstName : 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!';
    }
};

//make animal function using object shorthand and computed property names
function makeAnimal(species,verb,sound) {
    let animal = {
        species,
        [verb](){
            return sound;
        }
    }
    return animal;    
}