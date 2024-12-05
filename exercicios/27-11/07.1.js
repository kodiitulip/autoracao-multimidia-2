/**
 * @param {string} msg
 * @param {number} offset
 * @returns
 */
const cesarCipher = (msg, offset) =>
	msg
		.split('')
		.map((char) => {
			const code = char.charCodeAt(0);

			const typeOffset =
				code >= 65 && code <= 90
					? 65
					: code >= 97 && code <= 122
					? 97
					: 0;

			if (typeOffset === 0) return char;

			return String.fromCharCode(
				((code - typeOffset + offset) % 26) + typeOffset
			);
		})
		.join('');

/**
 * @param {string} msg
 * @param {number} offset
 * @returns
 */
const unCesarCipher = (msg, offset) =>
	msg
		.split('')
		.map((char) => {
			const code = char.charCodeAt(0);

			const typeOffset =
				code >= 65 && code <= 90
					? 65
					: code >= 97 && code <= 122
					? 97
					: 0;

			if (typeOffset === 0) return char;

			return String.fromCharCode(
				((code - typeOffset - offset) % 26) + typeOffset
			);
		})
		.join('');

const ciphered = cesarCipher('Hello World!', 3);

const unciphered = unCesarCipher(ciphered, 3);

console.log(`
original: 'Hello World!'
offset: 3

ciphered: '${ciphered}'
unciphered: '${unciphered}'
`);
