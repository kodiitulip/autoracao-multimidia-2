const words = [
	'kodie',
	'code',
	'game',
	'development',
	'music',
	'design',
	'art',
	'pixels',
];

const sortedWords = words.map((w) => w.toLowerCase()).sort();

console.log(`\nunsorted: ${words}\nsorted: ${sortedWords}`);
