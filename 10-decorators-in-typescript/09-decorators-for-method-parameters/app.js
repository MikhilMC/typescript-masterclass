/*
 * Decorators For Method Parameters
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Manufacturer;
(function (Manufacturer) {
    Manufacturer["boeing"] = "boeing";
    Manufacturer["airbus"] = "airbus";
})(Manufacturer || (Manufacturer = {}));
function ParameterDecorator(classPrototype, methodName, index) {
    console.log(classPrototype);
    console.log(methodName);
    console.log(index);
}
class Airplane {
    constructor(_aircraftModel) {
        this._aircraftModel = _aircraftModel;
        console.log("Aircraft Class Instantiated");
    }
    static seatCount() {
        console.log("150 seats");
    }
    pilotName(name, lastName) {
        console.log(name);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
}
__decorate([
    __param(1, ParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Airplane.prototype, "pilotName", null);
const airplane = new Airplane("Airbus A380");
export {};
