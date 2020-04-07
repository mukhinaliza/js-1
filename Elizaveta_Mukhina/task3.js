function toCamelCase(str){
	var stringIntoArray = str.split(/-|_|\s/);
	var map = stringIntoArray.map((elem,index) => index == 0 ? elem : elem[0].toUpperCase()+elem.slice(1)).join("");
	console.log(map);
  
}
toCamelCase("the-stealth-warrior") 
toCamelCase("The_Stealth_Warrior") 

/* result:
theStealthWarrior
TheStealthWarrior
*/