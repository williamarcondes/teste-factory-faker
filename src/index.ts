import personFactory from './factory/factoryPerson';

const james = personFactory.build({
  firstName: "James",
  fullName: "James Smith",
});

console.log(james);

const youngBob = personFactory.build({ age: 5 });
console.log(youngBob);