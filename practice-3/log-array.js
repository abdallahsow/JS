myCourses = ["Learn CSS Animations", "UI Design fundamentals", "Intro to Clean code"]
daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function render(arrItem) {
    for (let i = 0; i < arrItem.length; i++) {
        console.log(arrItem[i])
    }
}


render(daysOfTheWeek)