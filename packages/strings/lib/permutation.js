const isString = require("./isString");
/**
 * Checks to see if string a is a permutation of string b
 *
 * Permutation defined as string a being made up of the same characters as string b
 */
function isPermutation(a, b) {
	if (!isString(a) || !isString(b)) {
		throw Error("Invalid inputs, strings are required");
	}

	if (a.length !== b.length) {
		return false;
	}

	let sumA = 0;
	let sumB = 0;
	for (let i = 0; i < a.length; i++) {
		sumA = sumA + a.charCodeAt(i);
		sumB = sumB + b.charCodeAt(i);
    }
    return sumA - sumB === 0;
}

module.exports = isPermutation;