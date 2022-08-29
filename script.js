/*
Global Variables 
*/
let upperDisplayValue = 0;
let bottomDisplayValue = 0;
let firstNumber = 0;
let secondNumber = 0;
let answer = 0;
let theOperator = "";
let clearBottom = false;

// Number Event Listeners
const numberBtns = document.getElementsByClassName("numberButton");
for(i of numberBtns){
  i.addEventListener('click', function() {
    composeNumbers(this.id);
});
}

// Operator Event Listeners
const operatorBtns = document.getElementsByClassName("operatorButton");
for(i of operatorBtns){
  i.addEventListener('click', function(){
    setOperator(this.id);
  });
}

// Clear Event Listener
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function(){
  clearScreen();
});

// Equal Event Listener
const equalBtn = document.getElementById("=");
equalBtn.addEventListener('click', function(){
  evaluateAnswer();
});

// Delete Event Listener
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener('click', function(){
    deleteNumberFromScreen();
});

// Period Event Listener
const periodBtn = document.getElementById(".");
periodBtn.addEventListener('click', function(){
    addPeriod();
});

function composeNumbers(value){
  if(bottomDisplayValue==0 || clearBottom){
    bottomDisplayValue = "";
    updateAnswer(bottomDisplayValue);
    clearBottom = false;
  }
  bottomDisplayValue = bottomDisplayValue + value;
  updateAnswer(bottomDisplayValue);
}

function setOperator(value){

 if(theOperator!=null && theOperator!=""){
    evaluateAnswer();
  }
  firstNumber = bottomDisplayValue;
  theOperator = value;
  upperDisplayValue = `${firstNumber} ${theOperator}`;
  
  updateDisplay(upperDisplayValue);
  clearBottom = true;
  
  
}

function evaluateAnswer(){
  secondNumber = bottomDisplayValue;
  console.log("first number: " + firstNumber + " second number " + secondNumber + " the operator " + theOperator);
  let totalSum = operate(firstNumber, secondNumber, theOperator);
  bottomDisplayValue = totalSum;
  updateAnswer(bottomDisplayValue);
  updateDisplay(bottomDisplayValue);
  theOperator = null;
}



function clearScreen(){
  upperDisplayValue = "";
  bottomDisplayValue = 0;
  firstNumber = 0;
  secondNumber = 0;
  theOperator = 0;
  firstOperative = true;
  updateAnswer(bottomDisplayValue);
  updateDisplay(upperDisplayValue);
}
   

function deleteNumberFromScreen(){
  bottomDisplayValue = bottomDisplayValue.toString().slice(0, -1);
  updateAnswer(bottomDisplayValue);
}

function updateDisplay(value){
  document.getElementById("calculator").innerHTML = value;
}

function updateAnswer(value){
  document.getElementById("answer").innerHTML = value;
}


function addPeriod(){
  // Functionality still to be added
}

function add(numOne, numTwo) {
  console.log("about to add the numbers: " + parseInt(numOne) + parseInt(numTwo));
    let sum = parseInt(numOne) + parseInt(numTwo);
    console.log("the sum is: " + sum);
    return sum;
};

function subtract(numOne, numTwo) {
    let sum = parseInt(numOne) - parseInt(numTwo);
    return sum;
};

function multiply(numOne, numTwo) {
    let sum = parseInt(numOne) * parseInt(numTwo);
    return sum;
};

function divide(numOne, numTwo) {
    let sum = parseInt(numOne) / parseInt(numTwo);
    return sum;
};

function operate(numOne, numTwo, operator){
    switch(operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":
          return subtract(numOne, numTwo);
        case "*":
          return  multiply(numOne, numTwo);
        case "/":
          return divide(numOne, numTwo);
      }
}


