function countDown(num) {
 var current = num;
 var timer = setInterval(function() {
console.log(current);
    if (current==0) {
      clearInterval(timer);
    }
    current--;
  }, 1000);
}
countDown(3);

/*result:
3
2
1
0
*/