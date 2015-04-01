/* Object Creation
 * ============ */

/* 1. using literal notation */
var car = {
	make : "Honda",
	year : "2012"
};

/* 2. using using an object constructor */
var person = new Object();
person.name = "Captain Jack Sparrow";
person.occupation = "Pirate";
person.setAge = function (newAge){
  bob.age = newAge;
};

/* 2. using a custom constructor aka Class in OOP */
function Employee(name, age) {
	this.name = name;
	this.age = age;
	this.printName = function() {
		if (typeof console == "object") {
			console.log(this.name);
		}
	};
}
/* Instantiate new objects */
var bob = new Employee("Bob Smith", 30);
bob.printName();
var susan = new Employee("Susan Jordan", 25);
susan.printName();