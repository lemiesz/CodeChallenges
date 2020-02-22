const permuation = require("../lib/permutation");

describe("permutation test suite", () => {
    it("Throw exception if inputs are not string", () => {
        expect.assertions(2);
        try {
            permuation("1",2);
        } catch(e) {
            expect(e).not.toBeNull();
        }

        try {
            permuation(1, "2");
        } catch(e) {
            expect(e).not.toBeNull();
        }
    })

    const helper = (a,b, result) => expect(permuation(a,b)).toBe(result);

    it("(aba, aab) => true", () => {
        helper("aba", "aab", true);
    })

    it("(aaa, bbb) => false", () => helper("aaa","bbb", false))
    it("(Robert, robert) => false", () => helper("Robert", "robert", false))
    it("Car, raC => true", () => helper("Car", "raC", true));
})