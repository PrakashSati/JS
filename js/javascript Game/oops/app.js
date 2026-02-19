const student = {
  Name: "Prakash",
  marks: 83.4,
  printMarks: function () {
    console.log("Marks: ", this.marks);
  },
};

const taxcalc = {
  calTax() {
    console.log("Tax is 20%");
  },
};

const pandu = {
  salalry: 20000,
};
const pandu1 = {
  salalry: 20000,
};
const pandu2 = {
  salalry: 20000,
};
const pandu3 = {
  salalry: 20000,
};

// __proto__ <--> for taking obect from taxcalc to pandu
pandu.__proto__ = taxcalc;
pandu1.__proto__ = taxcalc;
pandu2.__proto__ = taxcalc;
pandu3.__proto__ = taxcalc;

// <============================>

// class start here.
class ToyataCar {
  constructor(brand, color) {
    console.log("Creating new object");
    this.brand = brand;
    this.color = color;
  }
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
}

// let myobjectname = new myclassName() --> for making objects taking only one class.
let fortuner = new ToyataCar("fortuner", "red"); //constructor
let lexus = new ToyataCar("lexus", "black"); //constructor

//constructor is used for nitialize value form start without depanding on class ==> bole tho apni khud ki khubi.

// <============================>

// Inheritance start here.

class person {
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
}

// extends used fo for inheritate class person to class Engineer
class Engineer extends person {
  work() {
    console.log("solve problem, build something");
  }
}

class doctor extends person {
  work() {
    console.log("Treat patient");
  }
}

// new used for taking value of Engineer to panduobj.
let panduobj = new Engineer();
let pandu2obj = new doctor();
