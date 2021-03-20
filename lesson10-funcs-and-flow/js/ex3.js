//Ex 3
function hello(firstName, lastName) {
    var firstName = firstName;
    var lastName = lastName;
    var fullName = `${firstName} ${lastName}`;

    return `Hello ${fullName}`;
}

var sayFullName = hello("Rich", "Cairns");
console.log(sayFullName);