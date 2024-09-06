/*
 * Adding To Prototype
 */

enum Manufacturer {
  boeing = "boeing",
  airbus = "airbus",
}

function AircraftManufacturer(manufacturer: Manufacturer) {
  return (target: Function) => {
    if (manufacturer === Manufacturer.airbus) {
      target.prototype.origin = "United States of America";
      target.prototype.manufacturer = Manufacturer.airbus;
      target.prototype.type = "Jet";
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturer.boeing;
      target.prototype.type = "Helicopter";
    }
  };
}

@AircraftManufacturer(Manufacturer.airbus)
class Airplane {
  constructor(public _aircraftModel: string, private pilot: string) {
    console.log("Aircraft Class Instantiated");
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane = new Airplane("Airbus A380", "John");

// console.log(airplane);
// @ts-ignore
console.log(airplane.manufacturer);

export {};
