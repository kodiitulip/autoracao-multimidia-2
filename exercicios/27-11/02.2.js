const words = [
	'code',
	'game',
	'development',
	'kodie',
	'music',
	'design',
	'art',
	'pixels',
];

/**
 * @param {string} word
 * @returns
 */
const compare = (word) => word.length > 4;

const bigWord = words.find(compare);

console.log(`
	word list: [${words}]
	
	first word with more than 4 letters: ${bigWord}
`);
