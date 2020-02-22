/**
 * Assume you have a method isSubstring which checks if one word is  substring of another. Given two string s1 and s2, write code to check if s2 is a rotation of s1 
 * using only one call to isSubstring (eg "waterbottle" is a rotation of "erbottlewat")
 * 
 */

const isString = require("./isString");

 function isRotation(a, b) {   
     if(!isString(a) || !isString(b)) throw Error("Invalid Inputs");
 
    if(a.length !== b.length) {
        return false;
    }

    if(a.length === 0) {
        return false;
    }

    const aa = a + a;
    return aa.includes(b);
 }

 module.exports = isRotation;

