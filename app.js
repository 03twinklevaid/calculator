function add(x, y) {
    const promise = new Promise((resolve, reject) =>{
        if(isNaN(x) || isNaN(y)) {
            reject("Invalid Input")
        }
        else {
            const sum = parseInt(x) + parseInt(y);
            resolve(sum )
        }
    })
    return promise;
}
var addTwo = (event) => {
    event.preventDefault();
    var x = document.getElementById('value1').value;
    var y = document.getElementById('value2').value;
    add(x, y)
    .then((z) => {
        document.getElementById('output').innerHTML = z;
        document.getElementById('output').className = "";
    })
    .catch((err) => {
        document.getElementById('output').innerHTML = err;
        document.getElementById('output').className = "error";
    })
    .finally(() => {
        document.getElementById('showOutput').className= "";
    })
}
function sub(x, y) {
    const promise = new Promise((resolve, reject) => {
        if(isNaN(x) || isNaN(y) || x<y) {
            reject ('Invalid Input');
        }
        else {
            const sub = parseInt(x) - parseInt(y)
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
    if(isNaN(x) || isNaN(y) || x<0 || y<0) {
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
    if(isNaN(x) || isNaN(y) || x<0 || y<0 || x==0 || y==0) {
        reject ('Invalid Input');
    }
    else {
        const divide = parseInt(x) / parseInt(y)
        resolve(divide)
    }
    })
    return promise;
}
var divideTwo = (event) => {
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








