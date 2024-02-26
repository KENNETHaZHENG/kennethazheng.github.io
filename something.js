// script.js
let currentNumber = 0;

// to change an attribute: get the id -> set it equal to something else
// function => let imgDiv = document.getElementById("img");
    //  imgDiv.src = 'https://www.tutorialspoint.com/images/QAicon-black.png'
    // imgDiv.setAttribute( "height", "200px" ); <- changes the height of img

function changeNumber() {
    // Increment the current number
    currentNumber++;

    // Update the displayed number
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}

function reset() {
    currentNumber = 0;
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}

function square2() {
    currentNumber = Math.floor(currentNumber * currentNumber*100)/100;
    // .getElementById() finds the id thats in the paren and then change it
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}

function sqrt() {
    if (currentNumber >= 0) {
        currentNumber = Math.floor(100*(currentNumber ** (1/2)))/100
    }else{
        currentNumber = "imaginary";
    }
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}
function decr(){
    currentNumber --;
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}