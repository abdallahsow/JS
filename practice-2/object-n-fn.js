let person = {
    name: "Abdallah",
    age: 20,
    country: "Guinea"
}

function logData() {
    let info = person.name + " is " + person.age + " years old and is from " + person.country;
    return info
}

console.log(logData())