const phrase =
	'TypeScript is a superset of JavaScript that adds static typing... And joy to static type lovers like me!';

/**
 * @param {string} str
 * @param {string} substr
 */
const howMany = (str, substr) => {
	str = str.toLowerCase();
	substr = substr.toLowerCase();
	let times = 0;

	for (let i = 0; i < str.length - substr.length; i++) {
		const isSub = str.slice(i, i + substr.length) === substr;

		if (isSub) times++;
	}

	return times;
};

console.log(`
	string: ${phrase}
	substring: 'script'

	how many times: ${howMany(phrase, 'script')} time(s)

	substring: 'StAtIc'

	howmany times: ${howMany(phrase, 'StAtIc')} time(s)
`);
