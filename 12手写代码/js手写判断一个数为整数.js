let num = 1;
//es6
if(!Number.isInteger) {
    //es5
    Number.isInteger = function(num) {
        return typeof num === 'number' && num%1 === 0
    }
}
console.log(Number.isInteger(num))

