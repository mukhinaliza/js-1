function convert() {
  var obj = {
	name: 'Jeremy', 
	age: 24,
	role: 'Software Engineer'
	}
  var arr = [];
for(var prop in obj){
  arr.push([prop,obj[prop]]);
} 
return arr;
}
console.log(convert());

/* result:
[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]*/