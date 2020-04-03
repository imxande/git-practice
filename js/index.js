// code magnets
function whatShallIWear(temp){
    if(temp < 60){
        console.log('Wear a jacket!');
    }
    else if (temp < 70) {
        console.log('Wear a sweater!');
    } 
    else {
        console.log('Wear a t-shirt!')
    }
}
const doIt = (params) => params == 2;

let test = 1;
console.log(doIt(test));
console.log(test);

whatShallIWear(50);
whatShallIWear(60);
whatShallIWear(80);

// bake function 
function bake(degrees){
    let message;

    if(degrees > 500){
        message = 'I am not a reactor!';
    }
    else if(degrees < 100){
        message = 'I am not a refrigerator!';
    }
    else {
        message = 'That\'s a very confortable temperature for me.';
    }
    return message;
}

// let status = bake(25);
// let status = bake(800);
let status = bake(350);

console.log(status);


// tracing the flow of execution with calculateArea function
function calculateArea(r){
    let area;

    if(r <= 0){
        return 0;
    }
    else {
        area = Math.PI * r * r;
        return area;
    }
}

// variable that holds the radius value
const radius = 5.2;

const myArea = calculateArea(radius);
console.log(`The Area is ${myArea}`);

console.log('*******************************************************');
// The Thing A Ma Jig exercise
function clunk(times){
    let num = times;
    while(num > 0){
        display('clunk');
        num = num - 1;
    }
}

// thingamajig function
function thingamajig(size){
    let facky = 1;
    clunkCounter = 0;
    
    if(size == 0){
        display('clank');
    }
    else if (size == 1) {
        display('thunk');
    }
    else {
        while (size > 1){
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

// function display
function display(output){
    console.log(output);
    clunkCounter = clunkCounter + 1;
}

let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

