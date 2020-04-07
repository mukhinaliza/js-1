function sum (){
 var arr = [];
for(var i = 0; i<arguments.length; i++){
 arr.push(arguments[i]);
  var count = arr.reduce(function(accumulator, currentValue){
 return accumulator + currentValue;
});}
console.log(count);
}
sum(1, 3, 5, 7);

/* result:
16
*/