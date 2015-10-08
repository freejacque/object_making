// This shows inheritance through a chain of prototypes

var Vehicle = function() {};

Vehicle.prototype.drive = function() {
  console.log('vroom...');
};


var Car = function() {};

Car.prototype = new Vehicle();

Car.prototype.honk = function() {
  console.log('honk honk');
};

var myCar = new Car();

myCar.honk();
myCar.drive();


// This shows inheritance using Object.create()

var vehicle = {};
vehicle.drive = function() {
  console.log('vrooom...');
};

var car = Object.create(vehicle);
car.honk = function() {
  console.log('honk honk');
};

