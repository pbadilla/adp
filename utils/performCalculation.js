// calculation.js

// Function to perform the calculation based on the provided object
function performCalculation(calculation) {
    const { operation, left, right } = calculation;
  
    switch (operation) {
    case "addition":
        return left + right;
    case "subtraction":
        return left - right;
    case "multiplication":
        return left * right;
    case "division":
        return left / right;
    default:
        throw new Error("Invalid operation");
    }
}
  
module.exports = performCalculation;