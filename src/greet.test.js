import greet from './greet.js'

describe("greet", () => {
  test("It should greet a person", () => {
    expect(greet("Ed")).toEqual("Hi, Ed!")
  })
})