let age = 67;

let discount = "";

if (age < 6) {
    discount = "free"
} else if (age < 18) {
    discount = "child discount"
} else if (age < 27) {
    discount = "student discount"
} else if (age < 67) {
    discount = "full price"
} else {
    discount = "senior citizen discount"
}

console.log(discount)