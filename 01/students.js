function theBest(studentsArray) {
  let max = 0
  let newArray = []
  let index1
  let index2
  studentsArray.forEach((element, index) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i].score > max) {
        max = element[i].score
        index1 = index
        index2 = i
      } else if (
        element[i].score === max &&
        element[i].date < studentsArray[index1][index2].date
      ) {
        max = element[i].score
        index1 = index
        index2 = i
      }
    }
  })

  console.log(`Best student ${studentsArray[index1][index2].name}`)
  return `Best student ${studentsArray[index1][index2].name}`
}

module.exports = theBest
