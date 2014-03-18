
/*
*Question 2
*/

function isPloyndrom (str) {
	for (var i=0;i<(str.length)/2;i++)
	{
		if (str.charAt(i)!=str.charAt(str.length-1-i))
			return false;
	}
	return true;
}
 console.log('result is', isPolyndrom('aa'));
 console.log('result is', isPolyndrom('aga'));
 console.log('result is', isPolyndrom('agg'));
