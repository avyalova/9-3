const studentsArray = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 15, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
]

function theBest(students) {
  let max = 0
  let bestDate = new Date(0)
  bestStudentsNames = []

  students.forEach((element) => {
    // console.log("Elemnt score is - " + element.score)
    if (element.score > max) {
      max = element.score
      bestDate = new Date(element.date)
      bestStudentsNames = []
      bestStudentsNames.push(element.name)
      // console.log(bestStudentsNames)
    } else if (element.score == max) {
      if (new Date(element.date) < bestDate) {
        bestDate = new Date(element.date)
        bestStudentsNames = []
        bestStudentsNames.push(element.name)
        //console.log(bestStudentsNames)
      }
    }
  })
  console.log(bestStudentsNames)
  return bestStudentsNames
}

//theBest(studentsArray[0])
module.exports = theBest
