import { CommonUtils } from "./common-utils.js";
export class MathUtils {
    static add(a, b) {
        CommonUtils.log(`Adding ${a} and ${b}`);
        return {
            sum: a + b,
            class: "MathUtils",
        };
    }
    static subtract(a, b) {
        return a - b;
    }
}
