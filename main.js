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

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})


// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

// Lightning Exercise 2: Copy the code below and paste it above your object.
// Use square bracket notation to output the value of those three properties to the console in Chrome.
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const outputElement2 = document.querySelector("#Lightning_Exercise_2");
// Square bracket notation??
console.log(dateVisited, owed, patient)



const doctorBill = [
    {
        officeName: "VA Medical Center",
        streetAddress: "21st Avenue Nashville TN",
        doctorName: "Dr. Asad",
        patientName: "Grady",
        visitDate: "1/21/2006",
        amountBilled: "30.00",
        dueDate: "4/20/2020"
    },
    {
        officeName: "VA Satellite Office",
        streetAddress: "US1 St Augustine FL",
        doctorName: "Dr. Lawyer",
        patientName: "Grady",
        visitDate: "1/21/2009",
        amountBilled: "30.00",
        dueDate: "10/31/2020"
    }
]

const outputElement3 = document.querySelector("#drBill")

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
// Iterate the array of dr Bills. Individual objects stored in `bill`.
doctorBill.forEach(bill => {

    // Iterate all of the values of the current car
    for (const value of Object.values(bill)) {
      outputElement2.innerHTML += `<div>${value}</div>`
    }
})


