addNumbers = (a, b) => a + b;

substractNumbers = (a, b) => a - b;

multiplyNumbers = (a, b) => a * b;

divideNumbers = (a, b) => ((b === 0) ? "ERROR" : a / b);

let operand1 = null;
let operand2 = null;
let operator = null;
let x = document.querySelectorAll("button");
x.forEach((btn) => btn.addEventListener("click", (e) => clicked(e.target)));

document.getElementsByClassName("screen")[0].innerHTML = 0;

function reset() {
    operand1 = null;
    operand2 = null;
    operator = null;
}

operate = (a, b, operation) => {
    if (operation === '+') {
        document.getElementsByClassName("screen")[0].innerHTML = (addNumbers(a, b));
    }
    else if (operation === '-') {
        document.getElementsByClassName("screen")[0].innerHTML = (substractNumbers(a, b));
    }
    else if (operation === '*') {
        document.getElementsByClassName("screen")[0].innerHTML = (multiplyNumbers(a, b));
    } else if (operation === '/') {
        console.log("IM DIVIDED");
        document.getElementsByClassName("screen")[0].innerHTML = (divideNumbers(a, b));
    }
    reset();
}

function clicked(target) {

    if (target.classList.value == "number") {
        if (operator === null) {
            if (operand1!=null){
            operand1 = Number(operand1 + target.textContent);
            document.getElementsByClassName("screen")[0].innerHTML = operand1;
        }else{
            operand1 = Number(target.textContent);
            document.getElementsByClassName("screen")[0].innerHTML = operand1;
        }
        } else {
            if (operand2!=null){
            operand2 = Number(operand2 + target.textContent);
            document.getElementsByClassName("screen")[0].innerHTML = operand2;
            }else{
                operand2= Number(target.textContent);
                document.getElementsByClassName("screen")[0].innerHTML = operand2;
            }
        }
    }
    else if (target.classList.value == "operator") {
        if (operator === null) {
            if (operand1 ===null) {
                operand1 = Number(document.getElementsByClassName("screen")[0].innerHTML);
            }
            operator = target.textContent;
        } else if (operand2 != null) {
            operate(operand1, operand2, operator);
            operator = target.textContent;
            operand1=Number(document.getElementsByClassName("screen")[0].innerHTML);
        }
    }
    else if (target.classList.value == "functionality") {
        if (target.textContent === "=") {
            operate(operand1, operand2, operator);
        } else if (target.textContent === "Clear") {
            operand1 = 0;
            reset();
            document.getElementsByClassName("screen")[0].innerHTML = 0;
        } else if (target.textContent === ".") {
            (operator === null) ? operand1 = operand1 + "." : operand2 = operand2 + ".";
            document.getElementsByClassName("screen")[0].innerHTML += ".";
        } else if (target.textContent === "+/-") {
            (operator === null) 
            ? operand1 = -Number(document.getElementsByClassName("screen")[0].innerHTML) 
            : operand2 = -operand2;
            (operator === null) 
            ? document.getElementsByClassName("screen")[0].innerHTML = -Number(document.getElementsByClassName("screen")[0].innerHTML) 
            : document.getElementsByClassName("screen")[0].innerHTML = operand2;
        }
    }
    console.table(operand1,operator, operand2)
}
