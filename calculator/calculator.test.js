import { calculator } from './calculator.ts';

test('Add', () => {
	expect(calculator.add(2, 2)).toBe(4);
});

test('Subtract', () => {
	expect(calculator.subtract(2, 2)).toBe(0);
});

test('Multiply', () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});

test('Divide', () => {
	expect(calculator.divide(10, 2)).toBe(5);
});
