function sum (){
 var arr = Array.from(arguments);
return arr.length == 0 ? 0 : arr[0] + sum.apply(null, arr.slice(1));

}
console.log(sum(1, 3, 5, 7));
/* result:
16
*/