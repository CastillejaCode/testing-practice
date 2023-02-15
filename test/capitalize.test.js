import { capitalize } from '../code/capitalize';

test('Capitalize first letter of a string', () => {
	expect(capitalize('string')).toBe('String');
});
