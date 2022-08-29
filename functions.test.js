const functions = require("./functions")


test("Return two test", () => {
    expect(functions.returnTwo()).toBe(2)

})

test("Greeting Test", () => {
    expect(functions.greeting('James')).toBe('Hello James')
})

test("Greeting Test", () => {
    expect(functions.greeting('Jill')).toBe('Hello Jill')
})

test("Addition", () => {
    expect(functions.add(1, 2)).toBe(3)
})