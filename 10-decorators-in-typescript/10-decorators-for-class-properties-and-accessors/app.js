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
function PropertyDecorator(classPrototype, propertyName) {
    console.log(classPrototype);
    console.log(propertyName);
}
function AccessorDecorator(classPrototype, accessorName, propertyDescriptor) {
    console.log(classPrototype);
    console.log(accessorName);
    console.log(propertyDescriptor);
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
    PropertyDecorator,
    __metadata("design:type", String)
], Airplane.prototype, "_aircraftModel", void 0);
__decorate([
    AccessorDecorator,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Airplane.prototype, "aircraftModel", null);
export {};
