import { cipher } from './cipher.js';

test('Basic cipher', () => {
	expect(cipher('string', 1)).toBe('tusjoh');
});

test('Wrapping', () => {
	expect(cipher('jazz', 1)).toBe('kbaa');
});

test('Same Case', () => {
	expect(cipher('StriNg', 1)).toBe('TusjOh');
});

test('Keep punctuation', () => {
	expect(cipher('string!', 1)).toBe('tusjoh!');
});

test('Keep spacing', () => {
	expect(cipher('string is cool', 1)).toBe('tusjoh jt dppm');
});
