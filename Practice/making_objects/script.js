/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

//  MAKING OBJECTS---------

const jacket = {
    color: 'gray',
    size: 'medium',
    warm: true,
    pockets: 5,
};

const bucket = {
    color: 'red',
    material: 'metal',
    isSmall: false,
    hammer: {
        rusty: true,
        type: 'claw',
        grip: 'leather',
        weight: 12,
    },
};

console.log(jacket);
console.log(bucket);