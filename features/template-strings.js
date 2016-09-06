// function greet (name = 'Andrew') {
//     console.log('Hello ' + name + '!');
//     console.log(`Hello ${name}!`);
// }

// greet();
// greet('Kate');

// console.log(`1 + 6 = ${1 + 6}`);

// console.log(`Hey,

// This kindof looks like an email!

// - Andrew
// `);

var person = {
    name: 'David',
    age: 43
};

var defaultPerson = {
    name: 'Anonymous',
    age: 0
};

// function name anonymous, age, 0
function welcomePerson (person = defaultPerson) {
    console.log(`Hello ${person.name}! You are ${person.age}.`);
}

welcomePerson();
welcomePerson(person);
