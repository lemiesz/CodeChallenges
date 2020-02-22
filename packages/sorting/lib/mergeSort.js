/**
 * Merges two arrays, has a runtime of O(N + M) because it must look
 * at every single element in both arrays;
 */
function merge(array1, array2) {
	if (!Array.isArray(array1) || !Array.isArray(array2)) {
		throw Error("Inputs must be of type array");
	}

	let i = 0;
	let j = 0;

	const result = [];
	while (i < array1.length || j < array2.length) {
		const curr1 = array1[i];
		const curr2 = array2[j];

		if (curr1 === undefined) {
			result.push(...array2.slice(j, array2.length));
			j = array2.length;
		} else if (curr2 === undefined) {
			result.push(...array1.slice(i, array1.length));
			i = array1.length;
		} else if (curr1 < curr2) {
			result.push(curr1);
			i++;
		} else if (curr2 < curr1) {
			result.push(curr2);
			j++;
		} else {
			result.push(curr1);
			result.push(curr2);
			i++;
			j++;
		}
	}
	return result;
}

/**
 * Runtime of O(2NlgN) does 2N work at each step and divides the array into
 * 2 at each step.
 */
function mergeSort(input) {
	// Array is a leaf node, meaning by definition it is a sorted array
	if (input.length === 1 || input.length === 0) {
		return input;
	}

	let leftChild = input.slice(0, input.length / 2);
	let rightChild = input.slice(input.length / 2, input.length);

	leftChild = mergeSort(leftChild);
	rightChild = mergeSort(rightChild);

	// At this point inductively we assume both right, and left child are merged,
	// so we apply a final merge to get the result array
	return merge(leftChild, rightChild);
}

module.exports = {
	merge: merge,
	mergeSort: mergeSort
};
