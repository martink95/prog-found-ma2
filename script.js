// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);

// question 3
petArray.push("sheep");

// question 4
console.log(petArray.length);

// question 5
var catObject = {
    name: "Cat",
    colour: "Black",
    age: 7
};

// question 6
console.log(catObject.age);

// question 7
 var catArray = [catObject]; 

/* question 7, push method
var catArray = [];
catArray.push(catObject);
*/

// question 8
for (i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name, catArray[i].colour, catArray[i].age);
}

// question 9
function logToConsole(input) {
    console.log(input);
}

// question 10
logToConsole("donkey");