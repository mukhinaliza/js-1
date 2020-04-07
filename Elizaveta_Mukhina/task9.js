function countDown(numb){
setTimeout(function(){for(var i=numb; i>=0; i--){
	console.log(i);
}}, 1000);
}
countDown(3);

/*result:
3
2
1
0
*/
