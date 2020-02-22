const uniqChars = require("../lib/uniqChars");
describe("uniqChars()", () => {
	it("Robert => True", () => {
		expect(uniqChars("Robert")).toBeTruthy();
    });

    it("Rooobert => False", () => {
        expect(uniqChars("Rooobert")).toBeFalsy();
    })
    
    it("1 => Error", () => {
        expect.assertions(1)
        try {
            uniqChars(1)
        } catch(e) {
            expect(e).not.toBeNull();
        }
    })
})