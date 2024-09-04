/*
 * Using Interfaces With Classes
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
class Car {
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.type = "car";
    }
}
const ferrari = new Car(AutomobileBrands.ferrari, [AutomobileColors.red, AutomobileColors.black], "This is a Ferrari");
console.log(ferrari);
export {};
