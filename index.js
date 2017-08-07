var library = require ('./library');

var numbersO = [];
var numbersE = [];
for (i=0; i<= 100; i++){
    if (library.isOdd(i)) {
        numbersO.push(i);
    } else {
        numbersE.push(i);
    }
}
//numbersO.map(Math.sqrt);
console.log("Lyginiai:" + numbersO.map(function(number){
    return number * 10
}).join());
console.log("Nelyginiai:" + numbersE.join());


