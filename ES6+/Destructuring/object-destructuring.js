const info = {
  name: "Johnson",
  surname: "Dwayne",
  age: "30",
  job: "Web developer",
  university: "Anadolu University",
  status: "graduated",
  nationalities: { american: "USA", turkish: "Turkey" },
  hobbies: ["music", "sports", "reading", "cooking"],
  languages: {
    french: "proficient",
    english: "fluent",
    spanish: "native",
    turkish: "advanced",
  },
  address: {
    continent: { name: "Europe", code: "EU" },
    country: { name: "Turkey", code: "TR" },
    city: { name: "Ankara", code: "ANK" },
  },
};

const {
  languages: { french, english, turkish, spanish },
  address: {
    continent: { name, code },
  },
  surname,
  hobbies,
} = info;

let sentence = `${french} and ${english} are important factors in ${name} (${code}) according to ${surname} who likes ${hobbies[2]}`;
console.log(sentence);
