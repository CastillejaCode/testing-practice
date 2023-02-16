export function cipher(string, shift) {
	let stringArray = string.split('');
	let newArray = [];
	for (let x of stringArray) {
		newArray.push(convertLetter(x, shift));
	}
	let final = newArray.join('');
	return final;
}
let numbers = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
function convertLetter(letter, shift) {
	let lowerLetter = letter.toLowerCase();
	if (!numbers.includes(lowerLetter)) return letter;

	let position = numbers.findIndex((e) => e == lowerLetter);
	let newNumber = (position + shift) % 26;

	if (letter === letter.toUpperCase()) {
		return numbers[newNumber].toUpperCase();
	}
	return numbers[newNumber];
}

cipher('string!', 1);
