function splitAndMerge(str, sp){
	var stringIntoArray= str.split(" ");
return stringIntoArray.map(function(elem){
return elem.split("").join(sp);
}).join(" ");
}
console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));

/*result:
M y n a m e i s J o h n
H,e,l,l,o W,o,r,l,d,!
*/