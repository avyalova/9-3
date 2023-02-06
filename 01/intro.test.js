const { sum } = require("./intro")

describe("Sum function", () => {
  test("Sum should return sum of two values", () => {
    expect(sum(1, 5)).toBe(6)
    expect(sum(1, 3)).toEqual(4)
  })

  test("Sum should return value correctly comparing to other", () => {
    expect(sum(1, 5)).toBeGreaterThan(5)
    expect(sum(1, 3)).toBeGreaterThanOrEqual(4)
    expect(sum(1, 5)).toBeLessThan(10)
    expect(sum(1, 3)).toBeLessThanOrEqual(5)
  })

  test("Sum should  sum 2 float values", () => {
    expect(sum(0.1, 0.5)).toBe(0.6)
  })
})
