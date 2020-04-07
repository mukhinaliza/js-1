function re (str){
	var stringIntoArray = str.split(" ");
	var map = stringIntoArray.map(elem => elem.split("").reverse().join('')).join(' ');
	console.log(map);
}
re("A fun little challenge!");

/* result:
A nuf elttil !egnellahc
*/