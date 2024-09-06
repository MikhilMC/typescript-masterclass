/*
 * Using Same Decorator With Multiple Classes
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
var Manufacturer;
(function (Manufacturer) {
    Manufacturer["boeing"] = "boeing";
    Manufacturer["airbus"] = "airbus";
})(Manufacturer || (Manufacturer = {}));
function AircraftManufacturer(manufacturer) {
    return (target) => {
        if (manufacturer === Manufacturer.airbus) {
            target.prototype.origin = "United States of America";
            target.prototype.manufacturer = Manufacturer.airbus;
            target.prototype.type = "Jet";
            target.prototype.airbusMethod = () => {
                console.log("Function performed by Airbus");
            };
        }
        else {
            target.prototype.origin = "France";
            target.prototype.manufacturer = Manufacturer.boeing;
            target.prototype.type = "Helicopter";
            target.prototype.boeingMethod = () => {
                console.log("Function performed by Boeing");
            };
        }
    };
}
let Airplane = class Airplane {
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
Airplane = __decorate([
    AircraftManufacturer(Manufacturer.airbus),
    __metadata("design:paramtypes", [String, String])
], Airplane);
let Helicopter = class Helicopter {
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
Helicopter = __decorate([
    AircraftManufacturer(Manufacturer.boeing),
    __metadata("design:paramtypes", [String, String])
], Helicopter);
const airplane = new Airplane("Airbus A380", "John");
airplane.airbusMethod
    ? airplane.airbusMethod()
    : console.log("Method does not exists");
const helicopter = new Helicopter("H380", "Mark");
console.log(helicopter);
export {};
