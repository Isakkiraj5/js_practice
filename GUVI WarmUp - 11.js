/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	const secondsInMinute = 60;
	const numberOfFrames = num1 * num2 * secondsInMinute;
	return numberOfFrames;
	
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/