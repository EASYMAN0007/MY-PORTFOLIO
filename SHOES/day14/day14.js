// Objects

const person = {
    firstName : "John",
    lastName : "doe",
    age: 32,
    isMarried: true,
    hobby: null
};

console.log(person)

console.log("My name is " + person.firstName + " " + person.lastName);
console.log(`My name is ${person.firstName} ${person.lastName} and i am ${person.age} years old`)


// Array

const data =[{name: "Jane", age: 22}, "Tolu", true, 44]

const classmates = ['ben', 'ismail', 'dolapo', 'hassan', 'solomon'];

console.log(classmates[4]);

console.log(data);

const continents = [
    [
      { country: "Nigeria", capital: "Abuja" },
      { country: "Ghana", capital: "Accra" },
    ],
    [
      {
        country: "United Kingdom",
        otherCountries: [
          "Ireland",
          { country: "England", city: "Manchester" },
          "Scotland",
        ],
      },
      { country: "Spain", capital: "Madrid" },
    ],
    [
      { country: "United States", states: ["New York", "California"], capital: "Washington DC" },
      { country: "Brazil", capital: "Brazilia" },
    ],
    [
      { country: "China", capital: "Beijing" },
      { country: "Japan", capital: "Tokyo" },
    ],
  ];

//   i am from $nigeria, but my dream city is $Manchester. I would like to visit $california someday

console.log(`i am from ${continents[0][0].country}, but my dream city is ${continents[1][0].otherCountries[1].city}. I would like to visit ${continents[2][0].states[1]} someday `)

console.log(continents[1])