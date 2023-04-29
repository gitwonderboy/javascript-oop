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
    console.log(model);
  };
};

let oppo = new Phone("OPPO", "V10", 23000, 2022);
oppo.calcModel();
console.log(oppo);
