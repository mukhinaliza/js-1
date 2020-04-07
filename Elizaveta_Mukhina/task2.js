function convert() {
var obj = {
	name: 'Jeremy', 
	age: 24,
	role: 'Software Engineer'
	}
console.log(Object.entries(obj));
}
convert();
/* result:
[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]*/