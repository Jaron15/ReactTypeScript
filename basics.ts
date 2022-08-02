//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, paramaters

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

hobbies = ['Sports', 'Cooking']

let person: {
    name: string;
    age: number;
};

person = { 
    name: 'Max',
    age: 32
}
//an array of 'person' objects
let people: {
    name: string;
    age: number;
}[];

//Type inference

//string | number accepts either number or string 
//if it was just let course = 'React - The Complete Guide' the inference would be that its a string and thats what it will accept  
let course: string | number = 'React - The Complete Guide';


course = 12341
