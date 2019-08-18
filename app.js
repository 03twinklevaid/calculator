// Add JS docs (comments) to all the functions. see example below:
/**
 * Add
 * @param {string} x 
 * @param {string} y 
 * @returns {promise}
 */
function add(x, y) { // x,y should num1 and num2 
    const promise = new Promise((resolve, reject) =>{ // add space between => and {
        if(isNaN(x) || isNaN(y)) {
            reject("Invalid Input")
        }
        else {
            const sum = parseInt(x) + parseInt(y);
            resolve(sum ) // remove space after sum
        }
    })
    return promise;
}// add a new line after every function

/**
 * Add Two
 * @param {object} event 
 */
var addTwo = (event) => {
    event.preventDefault();
    var x = document.getElementById('value1').value;  // tip: Now you can just use value1.value to get the value of an input. Also Use better Id name.
    var y = document.getElementById('value2').value;
    add(x, y)
    .then((z) => { // Add tab 
        document.getElementById('output').innerHTML = z; // this logic is repeated at multiple places. can we somehow make it reusable. 
        document.getElementById('output').className = "";
    })
    .catch((err) => {
        document.getElementById('output').innerHTML = err; // this logic is repeated at multiple places. can we somehow make it reusable. 
        document.getElementById('output').className = "error";
    })
    .finally(() => {
        document.getElementById('showOutput').className= ""; // this logic is repeated at multiple places. can we somehow make it reusable. 
    })
}
function sub(x, y) {
    const promise = new Promise((resolve, reject) => {
        if(isNaN(x) || isNaN(y) || x<y) {
            reject ('Invalid Input');
        }
        else {
            const sub = parseInt(x) - parseInt(y) // missing semicolon;
            resolve(sub)
        }
    })
    return promise;
}
var subTwo = (event) => {
    event.preventDefault();
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    sub(x, y)
    .then((sub) => {
        document.getElementById('output').innerHTML = sub;
        document.getElementById('output').className = "";
    })
    .catch((err) => {
        document.getElementById('output').innerHTML = err;
        document.getElementById('output').className = "error";
    })
    .finally(() => {
        document.getElementById('showOutput').className = "";
    })
}
function multiply(x, y) {
    const promise = new Promise((resolve, reject) => {
    if(isNaN(x) || isNaN(y) || x<0 || y<0) { // add tab
        reject ('Invalid Input');
    }
    else {
        const multiply = parseInt(x) * parseInt(y)
        resolve(multiply)
    }
    })
    return promise;
}
var multiplyTwo = (event) => {
    event.preventDefault();
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    multiply(x, y)
    .then((multiply) => {
        document.getElementById('output').innerHTML = multiply;
        document.getElementById('output').className = "";
    })
    .catch((err) => {
        document.getElementById('output').innerHTML = err;
        document.getElementById('output').className = "error";
    })
    .finally(() => {
        document.getElementById('showOutput').className = "";
    })
}
function divide(x, y) {
    const promise = new Promise((resolve, reject) => {
    if(isNaN(x) || isNaN(y) || x<0 || y<0 || x==0 || y==0) { // we only need to check if the denominator is zero
        reject ('Invalid Input');
    }
    else {
        const divide = parseInt(x) / parseInt(y)
        resolve(divide)
    }
    })
    return promise;
}
var divideTwo = (event) => { // OPTIONAL: All these functions are basically doing the same thing. can we some how generalize them.
    event.preventDefault();
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    divide(x, y)
    .then((divide) => {
        document.getElementById('output').innerHTML = divide;
        document.getElementById('output').className = "";
    })
    .catch((err) => {
        document.getElementById('output').innerHTML = err;
        document.getElementById('output').className = "error";
    })
    .finally(() => {
        document.getElementById('showOutput').className = "";
    })
}

//remove these extra lines






