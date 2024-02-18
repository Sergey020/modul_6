let counterValue = 0;
const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
const addvalue = event => {
    console.log("+"); 
    counterValue += 1;
   
    console.log(counterValue);
}
btnIncr.addEventListener("click",addvalue);
const minusvalue = event => {
    console.log("-"); 
    counterValue -= 1;
   
    console.log(counterValue);
}
btnDecr.addEventListener("click",minusvalue);
console.log(counterValue);
valueEl.textContent = counterValue;
