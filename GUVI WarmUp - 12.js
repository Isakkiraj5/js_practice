/* Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

function divisibleByFive(num1) {
	///Your code Starts here 
	let istrue = true;
	if (num1 % 5 === 0) {
		return istrue;
	} else {
		istrue = false;
		return istrue;
	}
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

divisibleByFive(5);
divisibleByFive(-55);
divisibleByFive(37);
*/