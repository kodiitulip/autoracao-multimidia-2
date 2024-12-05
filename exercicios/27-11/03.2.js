const phrase = "Homework can be fun if it's about something you like!";

/**
 * @param {string} str
 * @returns
 */
const findLastWord = (str) => str.split(' ').reverse()[0];

console.log(`
	phrase: ${phrase}

	last word: ${findLastWord(phrase)}
`);
