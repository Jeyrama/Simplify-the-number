/*
Given a positive integer as input, 
return the output as a string in the following format:
  Each element, corresponding to a digit of the number, 
  multiplied by a power of 10 in such a way that with the 
  sum of these elements you can obtain the original number.

Examples:
  Input 	Output
  0 	    ""
  56 	    "5*10+6"
  60 	    "6*10"
  999 	  "9*100+9*10+9"
  10004 	"1*10000+4"

Note: input >= 0
*/


// Solution

function simplify(number) {
	return [ ...String(number) ]
		.reduce((sum, num, index) => {
			return num == 0
				? (sum += '')
				: String(number).length == index + 1
					? (sum += `${num}+`)
					: (sum += `${num}*${Math.pow(10, String(number).length - index - 1)}+`);
		}, '')
		.slice(0, -1);
}

// or