// * Objects are collections of properties
// * Properties are a key-value pair
// * Rather than accessing data using an index, we use custom keys
// * Keys are converted into strings
// * Use const when you want the reference to stay the same

// Syntax Object Literal
const myFitBitData = {
  totalSteps: 3020,
  avgSleep: '7.4',
  floors: 45,
  workoutsThisWeek: '4 of 6',
};

const numbers = {
  100: 'one hundred',
  16: 'sixteen',
};

numbers[100]; //result 'one hundred'

// Nested Objects
const dog = {
  firstName: 'Cooper',
  lastName: 'Long',
  strengths: ['barking', 'sniffing'],
  treats: {
    cookie: 'peanut butter',
    jerky: 'chicken',
  },
};

// Array of Objects
const shoppingCart = [
  {
    product: 'airheads',
    price: 4.99,
    quantity: 6,
  },
  {
    product: 'nerds',
    price: 5.99,
    quantity: 3,
  },
  {
    product: 'red vines',
    price: 6.99,
    quantity: 5,
  },
];

// Array/Object Equality

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

nums === mystery; // false
moreNums === nums; // true
