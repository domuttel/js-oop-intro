// 1. Create a Child class that takes a height, name, and age.
// 1. Create a Ride class that takes a minimum and maximum height.
// 1. Create two instances of each.
// 1. Write a function that takes a ride object and a child object as arguments and determines if the child is take enough for the ride (return true or false).

var Child = function(height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
};

var Ride = function(minimum, maximum) {
  this.minimum = minimum;
  this.maximum = maximum;
};

var mike = new Child(5, "Michael", 32);
var chad = new Child(6, "Chad", 43);

var tornado = new Ride(3, 7);
var whiplash = new Ride(6, 7);

function rightHeight(child, ride) {
  if (child.height > ride.minimum) {
    return true;
  } else {
    return false;
  }
}
console.log(rightHeight(mike, whiplash));