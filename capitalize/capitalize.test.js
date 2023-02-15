import { capitalize } from './capitalize';

test('Capitalize first letter of a string', () => {
	expect(capitalize('string')).toBe('String');
});
