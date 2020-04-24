function toCamelCase(str){
var stringIntoArray = str.split(/-|_|\s/);
return stringIntoArray.map(function(elem,index){
return index == 0 ? elem : elem[0].toUpperCase()+elem.slice(1);
  }).join("");
}
console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior"));

/* result:
theStealthWarrior
TheStealthWarrior
*/