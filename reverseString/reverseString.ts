export function reverseString(string: string) {
	let split: string[] = string.split('');
	let stringRev: string[] = [];
	for (let x of split) {
		stringRev.unshift(x);
	}
	return stringRev.join('');
}
