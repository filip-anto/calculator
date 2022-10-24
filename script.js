addNumbers = (a, b) => a + b;

substractNumbers = (a, b) => a - b;

multiplyNumbers = (a, b) => a * b;

divideNumbers = (a, b) => ((b === 0) ? "ERROR" : a / b);

let operand1 = null;
let operand2 = null;
let operator = null;
let float = false;
let x = document.querySelectorAll("button");
x.forEach((btn) => btn.addEventListener("click", (e) => clicked(e.target)));

document.getElementsByClassName("screen")[0].innerHTML = 0;

function reset() {
    operand1 = null;
    operand2 = null;
    operator = null;
    float = false;
    document.getElementById("setFloat").disabled = false;
}

let keyPressed;
keyPressed = document.addEventListener("keydown", (e) => pressed(e));
function pressed(e) {
    if (e.key >= 0 && e.key < 10) {
        setOperand(Number(e.key));
    }
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        setOperator(e.key);
    }
    if ((e.key === "=" || e.key === "Enter") && operand2 !== null) {
        operate(Number(operand1), Number(operand2), operator);
    }
}

operate = (a, b, operation) => {
    if (operation === '+') {
        document.getElementsByClassName("screen")[0].innerHTML = (addNumbers(a, b));
    } else if (operation === '-') {
        document.getElementsByClassName("screen")[0].innerHTML = (substractNumbers(a, b));
    } else if (operation === '*') {
        document.getElementsByClassName("screen")[0].innerHTML = (multiplyNumbers(a, b));
    } else if (operation === '/') {
        document.getElementsByClassName("screen")[0].innerHTML = (divideNumbers(a, b));
    }
    reset();
}

function setOperand(target) {
    if (operator === null) {
        (operand1 === null) ? operand1 = Number(target) : operand1 = Number("" + operand1 + target);
        document.getElementsByClassName("screen")[0].innerHTML = operand1;
    } else {
        (operand2 === null) ? operand2 = Number(target) : operand2 = Number("" + operand2 + target);
        document.getElementsByClassName("screen")[0].innerHTML = operand2;
    }
}

function setOperator(target) {
    if (operator === null) {
        if (operand1 === null) {
            operand1 = Number(document.getElementsByClassName("screen")[0].innerHTML);
        }
    } else if (operand2 != null) {
        operate(Number(operand1), Number(operand2), operator);
        operand1 = Number(document.getElementsByClassName("screen")[0].innerHTML);
    }
    operator = target;
    float = false;
    document.getElementById("setFloat").disabled = false;
}

function deleteNumber() {
    if (operand2 === null) {
        if (operand1 !== null) {
            operand1 = Number(operand1.toString().split("").slice(0, -1).join(""));
            document.getElementsByClassName("screen")[0].innerHTML = operand1;
        } else {
            operand1 = document.getElementsByClassName("screen")[0].innerHTML;
            operand1 = Number(operand1.toString().split("").slice(0, -1).join(""));
            document.getElementsByClassName("screen")[0].innerHTML = operand1;
        }
        if (operand1 % 1 === 0) {
            float = false;
            document.getElementById("setFloat").disabled = false;
        }
    } else {
        operand2 = Number(operand2.toString().split("").slice(0, -1).join(""));
        document.getElementsByClassName("screen")[0].innerHTML = operand2;
        if (operand1 % 1 === 0) {
            float = false;
            document.getElementById("setFloat").disabled = false;
        }
    }
}

function changePolarity() {
    (operator === null)
        ? operand1 = -Number(document.getElementsByClassName("screen")[0].innerHTML)
        : operand2 = -operand2;
    (operator === null)
        ? document.getElementsByClassName("screen")[0].innerHTML = -Number(document.getElementsByClassName("screen")[0].innerHTML)
        : document.getElementsByClassName("screen")[0].innerHTML = operand2;
}

function makeFloat() {
    (operator === null) ? operand1 = operand1 + "." : operand2 = operand2 + ".";
    document.getElementsByClassName("screen")[0].innerHTML += ".";
    float = true;
    document.getElementById("setFloat").disabled = true;
}

function clicked(target) {
    if (target.classList.value == "number") {
        setOperand(target.textContent);
    } else if (target.classList.value == "operator") {
        setOperator(target.textContent);
    }
    else if (target.classList.value == "functionality") {
        if (target.textContent === "=" && operand2 !== null) {
            operate(Number(operand1), Number(operand2), operator);
        } else if (target.textContent === "Clear") {
            reset();
            document.getElementsByClassName("screen")[0].innerHTML = 0;
        } else if (target.textContent === ".") {
            makeFloat();
        } else if (target.textContent === "+/-") {
            changePolarity();
        } else if (target.textContent === "Delete") {
            deleteNumber();
        }
    }
}
