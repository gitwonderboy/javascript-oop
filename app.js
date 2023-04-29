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
