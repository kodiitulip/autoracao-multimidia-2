const phrase =
	'JavaScript can be run outside of a web browser by utilizing an eviroment such as Node.js';

/**
 * @param {string} str
 * @param {string} substr
 */
const howMany = (str, substr) => {
	let times = 0;

	for (let i = 0; i < str.length - substr.length; i++) {
		const isSub = str.slice(i, i + substr.length) === substr;

		if (isSub) times++;
	}

	return times;
};

console.log(`
	string: ${phrase}
	substring: 'web'

	how many times: ${howMany(phrase, 'web')} time(s)

	substring: 'a'

	howmany times: ${howMany(phrase, 'a')} time(s)
`);
