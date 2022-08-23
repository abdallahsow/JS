const students = [
  { name: "John", city: "New York" },
  { name: "Mary", city: "Paris" },
  { name: "Peter", city: "London" },
  { name: "Sara", city: "Berlin" },
  { name: "Jane", city: "Sydney" },
  { name: "Mike", city: "Moscow" },
];

for (const person of students) {
  const { name, city } = person;
  const sentence = `${name} lives in ${city}`;
  console.log(sentence);
}
