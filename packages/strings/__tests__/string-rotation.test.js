const isRotation = require("../lib/string-rotation");

describe("isRotation", () => {
	it("Throw exception if inputs are not string", () => {
		expect.assertions(2);
		try {
			isRotation("1", 2);
		} catch (e) {
			expect(e).not.toBeNull();
		}

		try {
			isRotation(1, "2");
		} catch (e) {
			expect(e).not.toBeNull();
		}
	});

	const helper = (a, b, result) => () => expect(isRotation(a, b)).toBe(result);
    it("a, a => true", helper("a", "b", false));
    it("aab, baa => true", helper("aab", "baa", true));
});
