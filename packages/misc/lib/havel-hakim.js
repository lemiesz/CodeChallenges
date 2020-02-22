const mergeSort = require("@lemiesz/sorting").mergeSort;

function havelHakim(input) {
	const noZeros = input.filter(item => item !== 0);
	if (noZeros.length === 0) {
		return true;
	}
	let sorted = noZeros.sort().reverse();

	while (sorted.length > 0) {
		const n = sorted.shift();
		if (n > sorted.length) {
			return false;
		}
		for (let i = 0; i < n; i++) {
			sorted[i] = sorted[i] - 1;
		}
		sorted = sorted.filter(item => item !== 0);
	}
	return true;
}

console.log(havelHakim([3, 2, 1]));

module.exports = havelHakim;
