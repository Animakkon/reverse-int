
module.exports = function reverse (n) {
    let number = "";
    n < 0 ? n = n * -1: n;
    
    while(Math.floor(n % 10) > 0 || n > 0){
        number += Math.floor(n % 10);
        n = (n - Math.floor(n % 10)) / 10;
    };
return parseInt(number);    
}
