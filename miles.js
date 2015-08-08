// 1. Create a Car class that takes the miles per gallon and gallons in a tank.
// 1. Create a Route class that takes the total miles to the destination, the destination name, and location (city and state).
// 1. Create two instances of each.
// 1. Write a function that takes a car object and a route object as arguments and determines if the car has enough gas to make the entire route (return true or false).



var Car = function(mpg, fuelLvl) {
  this.mpg = mpg;
  this.fuelLvl = fuelLvl;
};


var Route = function(distance, city, state) {
  this.distance = distance;
  this.city = city;
  this.state = state;
};

var bugattiVeyron = new Car(10, 27);
var fordPinto = new Car(30, 12);

var destOne = new Route(776, "Marfa", "Texas");
var destTwo = new Route(67, "FtCollins", "Colorado");

function destinationArrival(car, route) {
  car = car.mpg * car.fuelLvl;
  route = route.distance;
  if (car > route) {
    return true;
  } else {
    return false;
  }
}
console.log(destinationArrival(bugattiVeyron, destOne));


