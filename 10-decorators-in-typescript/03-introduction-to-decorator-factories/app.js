/*
 * Introduction To Decorator Factories
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
function FirstDecorator(name) {
    return function (constructor) {
        console.log(`${name} invoked`);
        console.log(constructor);
    };
}
let Aircraft = class Aircraft {
    constructor(_aircraftModel, pilot) {
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
        console.log("Aircraft Class Instantiated");
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
};
Aircraft = __decorate([
    FirstDecorator("First Decorator"),
    __metadata("design:paramtypes", [String, String])
], Aircraft);
const aircraft = new Aircraft("Airbus A380", "John");
export {};
