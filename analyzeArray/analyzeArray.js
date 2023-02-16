export function analyzeArray(arr) {
	let lengthValue = (() => arr.length)();
	let minValue = (() => arr.sort().at(0))();
	let maxValue = (() => arr.sort().at(arr.length - 1))();

	let averageValue = (() => arr.reduce((prev, current) => prev + current) / lengthValue)();

	return {
		average: averageValue,
		min: minValue,
		max: maxValue,
		length: lengthValue,
	};
}
