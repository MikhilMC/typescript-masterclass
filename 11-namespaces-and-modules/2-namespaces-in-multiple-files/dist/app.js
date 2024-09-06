"use strict";
var CommonUtils;
(function (CommonUtils) {
    function log(message) {
        console.log(`Log: ${message}`);
    }
    CommonUtils.log = log;
})(CommonUtils || (CommonUtils = {}));
/// <reference path="common-utils.ts" />
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        CommonUtils.log(`Adding ${a} and ${b}`);
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
var StringUtils;
(function (StringUtils) {
    function add(a, b) {
        return a + b;
    }
    StringUtils.add = add;
    function subtract(a, b) {
        return a.replace(b, "");
    }
    StringUtils.subtract = subtract;
})(StringUtils || (StringUtils = {}));
/*
 * Namespaces In Multiple Files
 */
///<reference path="utils/math-utils.ts" />
///<reference path="utils/string-utils.ts" />
let sum = MathUtils.add(5, 2);
let combined = StringUtils.add("Hello", "World");
console.log(sum);
console.log(combined);
