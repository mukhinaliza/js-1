function smallest(){
console.log(Math.min.apply(null, arguments));
}
function largest(){
console.log(Math.max.apply(null, arguments));
}
largest(2, 0.1, -5, 100, 3);
smallest(2, 0.1, -5, 100, 3);

/*result:
100
-5
*/