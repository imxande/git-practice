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
