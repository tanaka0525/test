var result;
const calc = document.getElementById("result");

function addition(num1,num2){
    result = Number(num1) + Number(num2);
    calc.value = result;
}
function subtraction(num1,num2){
    result = Number(num1) - Number(num2);
    calc.value = result;
}
function multiplication(num1,num2){
    result = Number(num1) * Number(num2);
    calc.value = result;
}
function division(num1,num2){
    result = Number(num1) / Number(num2);
    calc.value = result;
}