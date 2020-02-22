function uniqChars(input) {
    if(typeof input !== "string") throw Error("Invalid input should be a string");
    const charMap = {};
    for(let c of input) {
        if(charMap[c]) {
            return false;
        }
        charMap[c] = 1;
    }
    return true
}

module.exports = uniqChars;