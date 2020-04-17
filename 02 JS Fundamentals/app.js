const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(`${people[i].name} ${people[i].age}`);
}

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// cars.forEach(function(car){
//   console.log(car);
// }); // use callback/ self-calling function

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

val = window.navigator.geolocation;

console.log(val);