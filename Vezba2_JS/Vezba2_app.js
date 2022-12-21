const defaultRes= 0;
let currentRes= defaultRes;
let logOpt=[];

function getUserInput() {
    return +inputNumber.value;   // funkcija za unete korisnicke parametre RETURN povlaci unete parametre i pretvara ih u broj uz pomoc konvertora +(varijabila) //
}

function outputValue (previousResult , operator , currentInput) { 
const inputDescription = `${previousResult} ${operator} ${currentInput}`;
outputResult(currentRes, inputDescription);
}

function writeOperationsLog(optType , firstResult ,computedNumber , newResult )
{
const logEntry = {
operation:optType,
firstResult:firstResult,
computedNumber:computedNumber,
newResult:newResult
};
logOpt.push(logEntry);
console.log(logOpt);

}

//   Sabiranje //

function add(){
const computedNumber = getUserInput();
const initResult = currentRes;
currentRes += computedNumber;
outputValue(initResult,'+', computedNumber);
writeOperationsLog( 'Add', initResult , computedNumber, currentRes);
}

// Oduzimanje //

function subtract(){
    const computedNumber = getUserInput();
    const initResult = currentRes;
    currentRes -= computedNumber;
    outputValue(initResult,'-',computedNumber);
    writeOperationsLog ("Subtract",initResult,computedNumber,currentRes);
}

function multiply(){
    const computedNumber = getUserInput();
    const initResult = currentRes;
    currentRes *= computedNumber;
    outputValue(initResult,'*',computedNumber);
    writeOperationsLog ("Multiply",initResult,computedNumber,currentRes);
}
function divide(){
    const computedNumber = getUserInput();
    const initResult = currentRes;
    currentRes /= computedNumber;
    outputValue(initResult,'/',computedNumber);
    writeOperationsLog ("Divide",initResult,computedNumber,currentRes);
}
function exponent(){
    const computedNumber = getUserInput();
    const initResult = currentRes;
    currentRes **= computedNumber;
    outputValue(initResult,'**',computedNumber);
    writeOperationsLog ("Exponent",initResult,computedNumber,currentRes);
}
function clear() {
    currentRes = 0;
    inputNumber.value = 0;
    logOpt = [];
    calculationResult.textContent = 0;
    onGoingCalculation.textContent = 0;
}





btnAdd.addEventListener('click', add);
btnSubtract.addEventListener('click', subtract);
btnMultiply.addEventListener('click', multiply);
btnDivide.addEventListener('click', divide);
btnExponent.addEventListener('click', exponent);
btnClear.addEventListener('click', clear);