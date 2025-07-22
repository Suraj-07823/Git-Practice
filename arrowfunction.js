/* function demo()*/

// Arrow function syntax
//arroefn = (param1, param2) => {
// }

arrowfn = () => {
    a = 5;
    b = 10;
    sum = a + b;
    console.log("Sum is: " + sum);
} 

arrowfn();

arrow2 = () => { 
    let x = 70;
    let y = 30;
    return x+y
}

console.log(arrow2());

rn = arrow2();
console.log("Returned value: " + rn);

arrow3 = () => {
    return `the additon of given value is ${ p = 21 } and ${ q = 29 } is ${ p + q }`;

}

console.log(arrow3());

arrow4 = () => {
    return `the multiplication of given value is ${ d = 21 } and ${ f = 29 } is ${ d * f }`;

}

console.log(arrow4());


