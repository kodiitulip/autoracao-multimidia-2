const phrase = "Kodie's dog isn't scary, he's a cutie patootie!";

const date = '24-06-2005';

const regex = /kodie\'s/gi;

const dateRegex = /-/g;

console.log(`
	string: ${phrase}
	regex: ${regex}
	replace value: 'My'

	modified phrase: ${phrase.replace(regex, 'My')}

	string: ${date}
	regex: ${dateRegex}
	replace value: '/'

	modified phrase: ${date.replace(dateRegex, '/')}
`);
