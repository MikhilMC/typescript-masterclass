/*
 * Generics
 */
function returnParams(param) {
    return param;
}
const return1 = returnParams("string");
const return2 = returnParams(123);
const myParam = (param) => param;
const myParam2 = function (param) {
    return param;
};
export {};
