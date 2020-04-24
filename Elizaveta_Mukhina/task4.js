function re (str){
var stringIntoArray = str.split(" ");
return stringIntoArray.map(function(elem){ 
return elem.split("").reverse().join('');
}).join(' ');
}
console.log(re("A fun little challenge!"));

/* result:
A nuf elttil !egnellahc
*/