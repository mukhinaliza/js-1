function splitAndMerge(str, sp){
	 var stringIntoArray= str.split(" ");
var map = stringIntoArray.map(elem => elem.split("").join(sp)).join(" ");
console.log(map);
}
splitAndMerge("My name is John"," ");
splitAndMerge("Hello World!",",");

/*result:
M y n a m e i s J o h n
H,e,l,l,o W,o,r,l,d,!
*/