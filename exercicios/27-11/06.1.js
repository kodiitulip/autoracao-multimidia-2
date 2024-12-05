const text =
	"Holy [$#!%]! Is [NAME]! They Just Told You To [subscribe] And Don't Forget To Look In Your SPAMTON. Don't [Submerge] Yourself!. Don't You Want To Be A [BIG SHOT]??!??!?";

const regex = /sub[a-z]*/gi;

const matches = text.matchAll(regex);

console.log(`
regex: ${regex}
text: ${text}

matches found:`);

for (match of matches) {
	console.log(match.toString());
}
