const fullName = 'Kodie Freitas Sales';

/**
 * @param {number} start
 * @returns
 */
const findSpace = (start = 0) =>
	fullName.slice(start, fullName.length).indexOf(' ');

const firstName = fullName.slice(0, findSpace());

const surname = fullName.slice(findSpace() + 1);

console.log(`
	Full name: ${fullName}

	First name: ${firstName}
	Surname: ${surname}
`);
