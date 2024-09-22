"use strict";
/*
 * Decorators For Class Properties And Accessors
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
function PropertyDecorator() {
    return function FieldDecorator(target, propertyKey) {
        console.log(target);
        const fieldName = propertyKey;
        console.log(`Accessing the ${fieldName}`);
    };
}
function AccessorDecorator() {
    return function GetterDecorator(target, propertyKey, descriptor) {
        const originalGetter = descriptor.get;
        descriptor.get = function () {
            console.log(target);
            console.log(`${propertyKey} was accessed`);
            return originalGetter.call(this);
        };
        return descriptor;
    };
}
class Airplane {
    constructor(aircraftModel) {
        this._aircraftModel = aircraftModel;
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
    PropertyDecorator(),
    __metadata("design:type", String)
], Airplane.prototype, "_aircraftModel", void 0);
__decorate([
    AccessorDecorator(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Airplane.prototype, "aircraftModel", null);
const airplane = new Airplane("Boeing");
console.log(airplane.aircraftModel);
