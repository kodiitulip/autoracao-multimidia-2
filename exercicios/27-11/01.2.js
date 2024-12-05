const numbers = [110, 20, 19, 33, 64, 8, 19, 45, 24, 6, 2005];

const sortedNumbers = [...numbers].sort((a, b) => b - a);

const greaterNumber = sortedNumbers[0];

console.log(`
	unsorted numbers: ${numbers}
	sorted numbers:   ${sortedNumbers}
	greater number:   ${greaterNumber}`);
