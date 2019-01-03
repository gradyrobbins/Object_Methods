console.log("hello world main.js");

const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]



const outputElement = document.querySelector("#app")
outputElement.innerHTML += "<h1>Car List</h1>"

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    // Iterate all of the values of the current car
    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})


// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

// Lightning Exercise 2: Copy the code below and paste it above your object.
// Use square bracket notation to output the value of those three properties to the console in Chrome.
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const outputElement2 = document.querySelector("#Lightning_Exercise_2");
// the variables declared above, use in Square bracket notation to access the object Keys
// console.log(doctorBill[dateVisited], doctorBill[owed], doctorBill[patient])



const doctorBill = {
        officeName: "VA Medical Center",
        streetAddress: "21st Avenue Nashville TN",
        doctorName: "Dr. Asad",
        patientName: "Grady",
        visitDate: "1/21/2006",
        amountBilled: "30.00",
        dueDate: "4/20/2020"
    }

const outputElement3 = document.querySelector("#drBill")

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

// Object.keys() gives us an array that can be used in for.. of
for (const key of Object.keys(doctorBill)) {
    console.log(key);
}

//for ... in can only be used on an object to loop through
// for (let key in doctorBill) {
//     console.log(key)
// }

const doctorBillSection = document.createElement("section");
outputElement.appendChild(doctorBillSection);

for (const key of Object.keys(doctorBill)) {
    doctorBillSection.innerHTML += `<span> ${(key)} </span> <br/>`;
}


// Iterate the array of dr Bills. Individual objects stored in `bill`.
// doctorBill.forEach(bill => {

//     // Iterate all of the values of the current bill
//     for (const value of Object.values(bill)) {
//         outputElement2.innerHTML += `<div>${value}</div>`
//     }
// })


const outputElement4 = document.querySelector("#display-container")
const outputElement5 = document.querySelector("#display-container-2")
/*
Just get a reference to the first object since
they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement4.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(allCars[0])) {
  outputElement4.innerHTML += `<div>${key}</div>`
}

// // Iterate the array of cars. Individual objects stored in `car`.
// outputElement5.innerHTML += "<h1>Car List</h1> <br/>"
// allCars.forEach(car => {

//     // Iterate all of the values of the current car
//     for (const value of Object.values(car)) {
//       outputElement5.innerHTML += `<div>${value}</div>`
//     }
// })