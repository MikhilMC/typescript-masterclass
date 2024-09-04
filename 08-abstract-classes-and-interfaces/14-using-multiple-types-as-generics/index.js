/*
 * Using Multiple Types As Generics
 */
var AutomobileTypes;
(function (AutomobileTypes) {
    AutomobileTypes["car"] = "car";
    AutomobileTypes["bus"] = "bus";
    AutomobileTypes["van"] = "van";
    AutomobileTypes["truck"] = "truck";
    AutomobileTypes["bike"] = "bike";
})(AutomobileTypes || (AutomobileTypes = {}));
var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["honda"] = "honda";
    AutomobileBrands["bmw"] = "bmw";
    AutomobileBrands["toyota"] = "toyota";
})(AutomobileBrands || (AutomobileBrands = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["white"] = "white";
    AutomobileColors["black"] = "black";
    AutomobileColors["silver"] = "silver";
})(AutomobileColors || (AutomobileColors = {}));
const ferrari = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "This is a Ferrari",
};
const honda = {
    type: "car",
    brand: "honda",
    colors: ["silver", "black"],
    description: "This is a Honda",
};
const toyota = {
    type: "car",
    brand: AutomobileBrands.toyota,
    colors: [52347, 78945],
    description: "This is a Toyota",
};
console.log(ferrari);
console.log(honda);
console.log(toyota);
export {};
