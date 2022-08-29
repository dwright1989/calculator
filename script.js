/*
Global Variables 
*/
let displayValue = 0;
let answerValue = 0;
let firstNumber = 0;
let secondNumber = 0;
let theOperator = 0;
let firstOperative = true;


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
    // check if number or operator 
    let value = element.getInnerHTML();
    let idOfElement = element.id;
    /*
    If Number
    */
    if(value >=0 && value <=9){
      if(firstOperative){
        firstNumber = value;
        answerValue = firstNumber;
        
        firstOperative = false;
      }else{
        // check if after an operator or to be added to current number
        if(theOperator == 0 || theOperator == null || theOperator == ""){
          firstNumber = firstNumber.toString() + value.toString();
          answerValue = parseInt(firstNumber);
        }else{
          if(secondNumber == 0 || secondNumber == null || secondNumber == ""){
            secondNumber = value;
          }else{
            secondNumber = secondNumber.toString() + value.toString();
          }
          
          answerValue = secondNumber;
        }
      }
      updateAnswer(answerValue);
    }

    /*
    If Operator
    */
    else if(idOfElement == "/" || idOfElement == "*" || idOfElement == "-" || idOfElement == "+"){

      // if this is the first time we are operating
      if(theOperator == 0 || theOperator == null || theOperator ==""){
        theOperator = idOfElement;
        // make sure correct display (e.g. / should be divide symbol and * should be x)
        let displayOperator = theOperator;
        if(idOfElement == "/"){
          displayOperator = "&#247;";
        }else if (idOfElement == "*"){
          displayOperator = "x";
        }
        displayValue = answerValue + " " + displayOperator;
        updateDisplay(displayValue);
      }
      
    }

    else if(idOfElement = "="){
      evaluateAnswer();
      
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
  updateAnswer(sumTotal);
}

function updateDisplay(value){
  document.getElementById("calculator").innerHTML = value;
}

function updateAnswer(value){
  console.log("in the update answer function. answer: "+ value);
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


