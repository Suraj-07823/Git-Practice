function fn(){
    p = 5;
    d = 10;
    return r = p+d
    console.log(r)
}

console.log(fn())

/* function with return */
function product(price, nos){
    return price*nos

}
p1 = product(40000, 2)
console.log(p1)

p2 = product(50000, 4)
console.log(p2)

function company(cname){
    return "the company brand name is " + cname;
}

a1 = company("Apple");
console.log(a1);

function employee(ename, salary){
    return "Employee name is " + ename + " and salary is " + salary;
}

e1 = employee("Shreyash", 50000);
console.log(e1);

e2 = employee("Satyam", 60000);    
console.log(e2);