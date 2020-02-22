const uniqChars = require("../lib/uniqChars");
describe("uniqChars()", () => {
	it("Robert => True", () => {
		expect(uniqChars("Robert")).toBeTruthy();
    });

    it("Rooobert => False", () => {
        expect(uniqChars("Rooobert")).toBeFalsy();
    })
})