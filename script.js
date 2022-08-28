function add(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
};

function subtract(numOne, numTwo) {
    let sum = numOne - numTwo;
    return sum;
};

function multiply(numOne, numTwo) {
    let sum = numOne * numTwo;
    return sum;
};

function divide(numOne, numTwo) {
    let sum = numOne / numTwo;
    return sum;
};

function operate(numOne, numTwo, operator){
    switch(operator) {
        case "+":
            add(numOne, numTwo);
          break;
        case "-":
            subtract(numOne, numTwo);
          break;
        case "*":
            multiply(numOne, numTwo);
          break;
        case "/":
            divide(numOne, numTwo);
          break;
        
      }
}




/*const multiply = function(theArray) {
  const totalSum = theArray.reduce((total, value)=>{
    return total * value;
  },1);
  return totalSum;
};*/


