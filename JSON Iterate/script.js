var json = [
    {
        "name": "Rithickshival M",
        "email": "rithickshival16@gmail.com",
        "phone": 9894854356,
        "degree": "B.E",
        "DOB": "16-05-2000",
    },
    {
        "name": "Rivian",
        "email": "rivian@gmail.com",
        "phone": 9894854355,
        "degree": "B.E",
        "DOB": "27-05-2000",
    }
];

// Iterate using a for loop
for (var i = 0; i < json.length; i++) {
    var person = json[i];  // Access each object in the array

    console.log("Person " + (i + 1) + ":");
    console.log("Name: " + person.name);
    console.log("Email: " + person.email);
    console.log("Phone: " + person.phone);
    console.log("Degree: " + person.degree);
    console.log("Date of Birth: " + person.DOB);
    console.log("------------");  // Just to separate each person's details
}
//******************************************************************************************************

// Iterate using a for...in loop
for (var i in json) {
    var person = json[i];  // Access each object in the array

    console.log("Person " + (parseInt(i) + 1) + ":");

    // Loop through properties of each person object
    for (var prop in person) {
        console.log(prop + ": " + person[prop]);
    }

    console.log("------------");  // Just to separate each person's details
}

//*******************************************************************************************************

// Iterate using a for...of loop
for (var person of json) {
    console.log("Name: " + person.name);
    console.log("Email: " + person.email);
    console.log("Phone: " + person.phone);
    console.log("Degree: " + person.degree);
    console.log("Date of Birth: " + person.DOB);
    console.log("------------");  // Just to separate each person's details
}

//*******************************************************************************************************

// Iterate using forEach loop
json.forEach(function(person, index) {
    console.log("Person " + (index + 1) + ":");
    console.log("Name: " + person.name);
    console.log("Email: " + person.email);
    console.log("Phone: " + person.phone);
    console.log("Degree: " + person.degree);
    console.log("Date of Birth: " + person.DOB);
    console.log("------------");  // Just to separate each person's details
});