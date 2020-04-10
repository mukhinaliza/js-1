function stringExpansion(str) {
return str.replace(/(\d)(\D)/gi, function(match, p1, p2){ 
 return match.replace(match, p2).repeat(p1);
}).replace(/\d/g, "");                        
}
console.log(stringExpansion('3a4B2d'));
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

/* result:
aaaBBBBdd
DDDaadddddff
dddffaa
abcde
*/