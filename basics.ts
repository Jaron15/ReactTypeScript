//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, paramaters

//if you dont define a type the default is 'any'

//Primitives

let age: number;

age = 12

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex types

//string[] = array of strings
let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

//Type allias (like a type variable that sets a more complex type)
type Person = {
    name: string;
    age: number;
};

let person: Person;

person = { 
    name: 'Max',
    age: 32
}
//an array of 'person' objects
let people: Person[];

//Type inference

//string | number accepts either number or string 
//if it was just let course = 'React - The Complete Guide' the inference would be that its a string and thats what it will accept  
let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & Types

function addAB(a: number, b: number) {
    return a + b;
}

function printOutput(value) {
    console.log(value);
}

// Generics

//this is a helper function to add to an existing array 
//the T is a kind of variable that says that whatever uses it is the same type of value 
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3];
//in this ex it checks that the T props going in (demoArray, -1) are both numbers
const updatedArray = insertAtBeginning(demoArray, -1) //[-1, 1, 2, 3]
//in this it sees that a typr of string is being added to an array if strings 
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

//this gets an error bc T has been read to be numbers for updatedArray
updatedArray[0].split('')