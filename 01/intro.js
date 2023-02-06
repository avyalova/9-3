// function expect(value) {
//   return {
//     toBe: (exp) => {
//       if (value == exp) {
//         console.log("Sucess")
//       } else {
//         console.error(`Value is ${value},but expectation is ${exp}`)
//       }
//     },
//   }
// }

const sum = (a, b) => a + b

module.exports = { sum }
