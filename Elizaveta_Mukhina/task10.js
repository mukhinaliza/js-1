Function.prototype.myBind = function (context) {
var fToBind = this;
return function(){
return fToBind.apply(context, arguments);
 }
}

function addPropToNumber(number) {
	return this.prop + number; 
	}
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); 

/* result:
10
*/
