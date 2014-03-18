/*
*Question 1
*/

function fibbonachi (n) {
	if (n==0) {return 0;}
	if (n==1) {return 1;}
	return fibbonachi(n-1)+fibbonachi(n-2);
}
 var num=20
 console.log('result is',fibbonachi(num));
