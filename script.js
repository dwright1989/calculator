/*
Global Variables 
*/
let displayValue = 0;
let answerValue = 0;
let firstNumber = 0;
let secondNumber = 0;
let theOperator = 0;
let firstOperative = true;
let lastButton = 0;
let operatorPressed = false;


// add event listener for all number buttons
let btns = document.getElementsByClassName('allButtons');
console.log("btns: "+ btns.length);
for (i of btns) {
  i.addEventListener('click', function() {
      buttonPressed(this);
  });
}

// add event listener for clear
let clearButton = document.getElementById("clear");
clearButton.addEventListener('click', function(){
  clearScreen();
});

// add event listener for delete

function buttonPressed(element){
    let value = element.id;
    if(value >=0 && value<=9){
        // If the button pressed is a number then update the answer screen 
        console.log("We have a number");
        answerValue = answerValue.toString() + value.toString();   
        console.log("the answer value" + answerValue);  
        //displayValue = displayValue + answerValue;   
        console.log("the display value" + displayValue);  
    }else if(isOperator(value)){
      displayValue = displayValue + answerValue;
      displayValue = displayValue + value;
      answerValue = 0;
    }
    answerValue = (answerValue.toString()).replace(/^0+/, '');
    displayValue = (displayValue.toString()).replace(/^0+/, '');
    updateAnswer(answerValue);
    updateDisplay(displayValue);
  
}

function isOperator(val){
  console.log("in the is operator function.  Valu is: " + val);
  if(val=="/" || val =="+" ||val=="-" || val=="*"){
    console.log("about to return true");
    return true;
  }
}

function clearScreen(){
  displayValue = "";
  answerValue = 0;
  firstNumber = 0;
  secondNumber = 0;
  theOperator = 0;
  firstOperative = true;
  updateAnswer(answerValue);
  updateDisplay(displayValue);
}
    

function evaluateAnswer(){
  let sumTotal = operate(firstNumber, secondNumber, theOperator);
  console.log("the sum total in the evaluate answer is : "+ sumTotal);
  console.log("updating the global variable answer");
  answerValue = sumTotal;
  secondNumber = sumTotal;
  updateAnswer(sumTotal);
}

function updateDisplay(value){
  document.getElementById("calculator").innerHTML = value;
}

function updateAnswer(value){
  document.getElementById("answer").innerHTML = value;
}




function add(numOne, numTwo) {
    let sum = parseInt(numOne) + parseInt(numTwo);
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


