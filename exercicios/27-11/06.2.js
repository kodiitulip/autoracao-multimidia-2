const text =
	"Holy [$#!%]! Is [NAME]! They Just Told You To [subscribe] And Don't Forget To Look In Your SPAMTON. Don't [Submerge] Yourself!. Don't You Want To Be A [BIG SHOT]??!??!?";

const substring = "don't";

const regex = new RegExp(substring, 'gi');

const matches = text.matchAll(regex);

console.log(`
text: ${text}

substring to find: ${substring}
regex generated: ${regex}

matches found:`);

for (match of matches) {
	console.log(`${match.toString()}, index: ${match.index}`);
}
