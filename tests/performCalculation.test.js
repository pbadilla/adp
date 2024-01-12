// calculation.test.js
const performCalculation = require("../utils/performCalculation.js");

// Example test cases
test("performCalculation - addition", () => {
    const result = performCalculation({
        operation: "addition",
        left: 5,
        right: 3,
    });
    expect(result).toBe(8);
});

test("performCalculation - subtraction", () => {
    const result = performCalculation({
        operation: "subtraction",
        left: 10,
        right: 4,
    });
    expect(result).toBe(6);
});

test("performCalculation - multiplication", () => {
    const result = performCalculation({
        operation: "multiplication",
        left: 7,
        right: 2,
    });
    expect(result).toBe(14);
});

test("performCalculation - division", () => {
    const result = performCalculation({
        operation: "division",
        left: 20,
        right: 4,
    });
    expect(result).toBe(5);
});

test("performCalculation - invalid operation", () => {
    expect(() => performCalculation({
        operation: "unknown",
        left: 1,
        right: 2,
    })).toThrowError("Invalid operation");
});
