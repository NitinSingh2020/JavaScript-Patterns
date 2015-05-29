/* Super Class */
function People() {
    // Method to Print Name
    this.printName = function() {
        if (typeof console == "object")
            console.log("Name: " + this.name);
    };
    
    // Method to Print Age
    this.printAge = function() {
        if (typeof console == "object")
            console.log("Name: " + this.age);
    };
}

/* Child Class */
function Student(_name, _age, _major) {
    this.name = _name;
    this.age = _age;
    this.major = _major;
}

/* Inherit from the Parent Class */
Student.prototype = new People();

var scienceStudent = new Student("Nitin", 29, "CS");

Student.prototype.printMajor = function() {
    if (typeof console == "object" )
        console.log("major: " + this.major);
};

scienceStudent.printMajor();
scienceStudent.printName();
scienceStudent.printAge();