console.log("hello world food.js")

// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.


const dinnerTime = [
    {
    name: "Bacon Cheeseburger",
    ethnicity: "American",
    vegetarian: false,
    },
    {
    name: "Tacos",
    ethnicity: "Mexican",
    vegetarian: false,
    },
    {
    name: "Sushi",
    ethnicity: "Japan",
    vegetarian: false,
    }
]

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

const outputElementDinnerTime = document.querySelector("#food");

dinnerTime.forEach(item => {
    let stringOfHTML = `<article class="food">`;

        for (const entrySet of Object.entries(item)) {
            stringOfHTML += `<div>${(entrySet)[0]}: ${entrySet[1]} </div> `;

        }
    outputElementDinnerTime.innerHTML += stringOfHTML + "</article>"

})
