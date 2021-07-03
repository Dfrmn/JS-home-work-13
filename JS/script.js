let num = +prompt(`Enter number`);
let degree = +prompt(`Enter degree of`);

// function func - returns the degree of a number
function func(num , degree = 1) {  
    
    if(typeof num !== `number` || isNaN(num)) { return `some error` };
    if(typeof degree !== `number` || isNaN(degree)) { return `some error` };  

    let result = Math.pow(num , degree);
    return result;
}
alert(func(num , degree));
// console.log(typeof num , typeof degree);