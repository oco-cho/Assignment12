// STEP 1
// function Cat() {

// };

// let Dog = function() {

// };

// STEP 2
// let myCat = new Cat();
// let myDog = new Dog();


// STEP 3

// function Animal() {
//     this.msg = function() {
//         console.log('The Animal has been created');
//     }
// }

// let myAnimal = new Animal();

// myAnimal.msg();

// STEP 4

// function Animal(value) {
//     console.log(value);
// }

// let myAnimal = new Animal("I'm an animal");

// STEP 5
// function Animal(type, breed, color, height, length) {
//     this._type = type;
//     this._breed = breed;
//     this._color =  color;
//     this._height = height;
//     this._length = length;
// }

// STEP 6
// let myAnimal = new Animal('dog', 'Plott Hound', 'brindle', 20, 36);

// for (let i in myAnimal) {
//     console.log(i);
// }

// STEP 7

// Animal.prototype.speak = function() {
//     if (this._type === 'dog') {
//         return `The ${this._color} dog is barking!`;
//     } else if (this._type === 'cat') {
//         return `The ${this._color} dog is meowing!`;
//     }
// }

// let myAnimal = new Animal('dog', 'Plott Hound', 'brindle', 20, 36);

// console.log(myAnimal.speak());



// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type;
//     let _breed = breed;
//     let _color =  color;
//     let _height = height;
//     let _length = length;
//     let checkType = function() {
//         if (_type === 'dog') {
//             return 'dog';
//         } else if (_type === 'cat') {
//             return 'cat';
//         }
//     }
//     this.speak = function() {
//         return `The ${checkType()} has made a noise!`;
//     }
// }

// let myAnimal = new Animal('dog', 'Plott Hound', 'brindle', 20, 36);

// console.log(myAnimal.speak());


// STEP 9

// String.prototype.findWords = function() {
//     alert(this.match(/the/g).length);
// }


// let paragraph = 'Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.';

// paragraph.findWords('the');