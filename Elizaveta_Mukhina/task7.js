function transform(arr){
	return arr.map(function(elem){
		return function(){
			return elem;	
		}
	});
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); 
console.log(newArray[4]());

/* result:
40
50
*/