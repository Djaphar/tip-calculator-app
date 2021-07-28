//set variables
const form = document.querySelector("#form");
const billNum = document.querySelector("#billNum");
const tip = document.querySelectorAll(".tip");
const customTip = document.querySelector("#customTip");
const peopleNum = document.querySelector("#peopleNum");
let tipValue;
const amount = document.querySelector('#amount');
const total = document.querySelector('#total');
const reset = document.querySelector("#reset");
let amountResult;
let totalResult;
reset.disabled = true;
// select tip
for (let i=0; i<tip.length; i++){
    tip[i].onclick = function(e){
        for (let j=0; j<tip.length; j++){
            if (j !== i) tip[j].classList.remove("selected");
        }
        e.target.classList.add('selected');
        customTip.value ="";
        tipValue = parseInt(e.target.innerHTML);
        console.log(tip[i]);
    }
}
customTip.onchange = function(){
    for (let j=0; j<tip.length; j++){
        tip[j].classList.remove("selected");
    }
    tipValue = parseFloat(customTip.value);
}
// calculate result
form.onsubmit = function(evt){
    evt.preventDefault();
    if (billNum.value === "" || peopleNum.value === "") {
        amountResult = 0.00;
        amount.innerHTML = "$0.00";
        totalResult = 0.00;
        total.innerHTML = "$0.00";
    } else{
        amountResult = parseFloat(billNum.value) * tipValue / (parseInt(peopleNum.value) * 100);
        amount.innerHTML = "$" + amountResult.toFixed(2);
        totalResult = (amountResult * parseInt(peopleNum.value) + parseFloat(billNum.value))/parseInt(peopleNum.value);
        total.innerHTML = "$" + totalResult.toFixed(2);
    }
    
    reset.disabled = false;
}
// reset
reset.onclick = function(e){
    for (let j=0; j<tip.length; j++){
        tip[j].classList.remove("selected");
    }
    billNum.value = "";
    peopleNum.value = "";
    tipValue = 0;
    customTip.value = "";
    amount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    reset.disabled = true;
}
