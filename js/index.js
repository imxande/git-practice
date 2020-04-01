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

// baker
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