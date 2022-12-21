// !! DOM references //

// Calculation ONGOING and RESULT //

const onGoingCalculation= document.querySelector('.js-ongoiong-calculation');
const calculationResult= document.querySelector('.js-calculation-result');

// OPERATORS //

const inputNumber = document.querySelector('.js-input-number');
const btnAdd= document.querySelector('.btn-add');
const btnSubtract= document.querySelector('.btn-subtract');
const btnMultiply= document.querySelector('.btn-multiply');
const btnDivide= document.querySelector('.btn-divide');
const btnExponent= document.querySelector('.btn-exponent');
const btnClear= document.querySelector('.btn-clear');

//  RESULT , DESCRIPTION //

function outputResult(result,description){
    calculationResult.textContent = result;
    onGoingCalculation.textContent = description;
}