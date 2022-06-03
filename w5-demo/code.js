console.log("is working");

function solve_qaud(a, b, c){
    if (a == 0) {
        console.log("Is not quadratic");
        if (b == 0) {
            console.log("bye! cuz a=0 and b=0!");
        } else {
            x1 = -1 * c / b
            console.log(x1);
        }
    } else {
        d = b ** 2 - 4 * a * c;
    
        if (d < 0)
            console.log("No Real Answer!");
        else{
            x1 = (-b + Math.sqrt(d)) / (2 * a)
            x2 = (-b - Math.sqrt(d)) / (2 * a)
            console.log("X1 : " + x1);
            console.log("X2 : " + x2);
        }
    }
}

a = 3
b = 4
c = 1

solve_qaud(a, b, c)
// solve_qaud(2, 2, 1)
// solve_qaud(2, 2, 1)
// solve_qaud(2, 2, 1)
// solve_qaud(2, 2, 1)


function setup (){
    console.log("jQuery works!");
}

$(document).ready(setup)
