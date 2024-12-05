const text1 = '24062005';
const text2 = '24-06-2005';

const regex = /^\d+$/gm;

console.log(`
	regex: ${regex}
	objective: only has numbers

	analyzed string: ${text1}
	regex test: ${regex.test(text1)}

	analyzed string: ${text2}
	regex test: ${regex.test(text2)}
`);
