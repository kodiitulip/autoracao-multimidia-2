const numbers = [110, 20, 19, 33, 64, 8, 19, 45, 24, 6, 2005];

var numberToFind = 6;

var isNumberFound = numbers.indexOf(numberToFind) !== -1;

console.log(`
	number to find:  ${numberToFind}
	list of numbers: ${numbers}
	${isNumberFound ? 'number was found' : 'number was not found'}
`);

var numberToFind = 21;

var isNumberFound = numbers.indexOf(numberToFind) !== -1;

console.log(`
	number to find:  ${numberToFind}
	list of numbers: ${numbers}
	${isNumberFound ? 'number was found' : 'number was not found'}
`);
