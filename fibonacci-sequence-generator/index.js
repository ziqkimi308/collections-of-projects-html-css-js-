function fibonacciGenerator(numb) {
	// For the case of numb is 0 or 1
	if (numb == 0) {
		return [0];
	}
	if (numb == 1) {
		return [0,1];
	}
	// For the case of numb greater than 1
	let myArray = [0, 1];
	for (let i=2; i <= numb; i++) {
		// The next value is the sum of 2 previous values
		myArray.push(myArray[i - 2] + myArray[i - 1])
	}
	return myArray;
}

// Call function and log the result
console.log(fibonacciGenerator(10));