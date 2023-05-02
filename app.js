// Contractor Function
/**
 * The function constructor is a pattern in Javascript based on which we can create several objects.
 * In simple terms, a constructor function is simply a function which acts as a pattern or template for creating objects.
 * With constructor function, we can instantiate objects and implement inheritance.
 * T define a constructor function, a function is used. It can be a normal function or function expression.
 */

let Phone = function (brand, androidVersion, price, year) {
  this.brand = brand;
  this.androidVersion = androidVersion;
  this.price = price;
  this.year = year;

  this.calcModel = function () {
    let model = new Date().getFullYear() - this.year;
    console.log(`This Smart Phone was launched ${model} years ago.`);
  };
};

// Why do we use The new Operator
/**
 * The new Operator does three things while creating an object using function constructor
 *
 * The new Operator first creates an empty object on function constructor
 * It also make sure that the 'this' variable in function constructor point to the newly created empty object
 * Finally, it returns the object from the function constructor
 */

let oppo = new Phone("OPPO", "V10", 23000, 2020);
console.log(oppo);
oppo.calcModel();

// If you were to create an Array Object like:
numbers = [10, 20, 5, 5, 4]
console.log(numbers[0])

/**
 * The above Array is created from new Array() function constructor.
 * Inherit all methods / functions that new Array() constructor has.
 */

// What is a class
/**
 * Classes in javascript allows us to create a blueprint and based on that blueprint,  we can instantiate object.
 * Classes in javascript are different from the traditional classes in other Object-Oriented Languages like Java and C++.
 * Classes are syntactic sugar of function constructor and prototypal inheritance. It's not a new concept in itself.
 */

//There are two ways of creating a class in javascript
/**
 * 1. Using class declaration in class declaration we use class keyword followed by class name.
 * 2. Using class expression
 */

//class declaration
class Person{
}


//Class expression
let person = class{
}

// Class in javascript can not be hoisted
// Hoisting is execution before declaration

class Phones{
	// The name of the class constructor should always be constructor can not be anything else

	constructor (brand, androidVersion, price, year) {
		this.brand = brand;
		this.androidVersion = androidVersion;
		this.price = price;
		this.year = year;
	  };

	//   Instance Method - Always attached to the instances
	  calcModel() {
		let model = new Date().getFullYear() - this.year;
		console.log(`This Smart Phone was launched ${model} years ago.`);
	  };

	//   Static Method - Always attached to the Class
	  static phoneBrand(){
		console.log("Hi I'm a Static Method")
	  }
}

let samsung = new Phones("samsung", "v20", 16000, 2022)
console.log(samsung)
samsung.calcModel()

Phones.phoneBrand();

// Object.create()
let someone = {
	greet(){
		console.log(`Hi my name is ${this.name}`)
	},

	init(name){
		this.name = name
	}
}

let wonder = Object.create(someone)
console.log(wonder)
wonder.init("Wonder")
// wonder.name = "Wonderboy"
wonder.greet()
