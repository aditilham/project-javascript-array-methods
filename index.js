"use strict"

let cars = [' BMW', ' Toyota', ' Honda', ' Ford']
console.log(`These are cars list = ${cars}`)

console.log(`---------------------------------------`)

//Popping the last list of cars list
console.log(`Popping the last list 'Ford'. ${cars.pop()}`) //goodbye last list 'Ford'
console.log(`New List of cars = ${cars}`) //BMW, Toyota, Honda

console.log(`---------------------------------------`)

//Pushing new element to list
console.log(`Push new element 'Mini' to the list. ${cars.push(' Mini')}`) //Push 'Mini' to the list
console.log(`New list of cars = ${cars}`) //BMW, Toyota, Honda, Mini

console.log(`---------------------------------------`)

//Shift - Extract first element of cars
console.log(`Extract first element 'BMW' of cars. ${cars.shift()}`) //goodbye first list 'BMW'
console.log(`New list of cars = ${cars}`) //Toyota, Honda, Mini

console.log(`---------------------------------------`)

//Unshift - Insert element to first list
console.log(`Add new element 'Subaru' and 'Acura' to first list. ${cars.unshift('Subaru',' Acura')}`) //Add new item to first list
console.log(`New list of cars = ${cars}`) // Subaru, Acura, Toyota, Honda, Mini

console.log(`---------------------------------------`)

//Array Splice - Removing element in the middle of Array
console.log(`Removing element 'Acura' in the middle of list. ${cars.splice(1, 1)}`) // removing start from index `1`, and removing `1` element
console.log(`New list of cars = ${cars}`) // Subaru, Toyota, Honda, Mini

console.log(`---------------------------------------`)

//Showing the selected element
console.log(cars.slice(1, 3)) // Toyota, Honda
console.log(cars) // Subaru, Toyota, Honda, Mini

console.log(`---------------------------------------`)

//Adding new 2 elements to Array for temporary
console.log(cars.concat(['Jeep', 'Bentley'])) // Subaru, Toyota, Honda, Mini, Jeep, Bentley
console.log(cars) // Subaru, Toyota, Honda, Mini

console.log(`---------------------------------------`)

//Sorting cars name letter by letter
console.log(`Sorting, From ${cars} to `)
console.log(cars.sort()) // Honda, Mini, Toyota, Subaru

console.log(`---------------------------------------`)

//Reverse elements in Array
console.log(`Reversing from ${cars} to `)
console.log(cars.reverse()) // Subaru, Toyota, Mini, Honda

console.log(`---------------------------------------`)