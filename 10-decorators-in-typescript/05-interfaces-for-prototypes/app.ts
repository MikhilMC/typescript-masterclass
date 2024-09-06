/*
 * Interfaces For Prototypes
 */

enum Manufacturer {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturer) {
  return (target: Function) => {
    if (manufacturer === Manufacturer.airbus) {
      target.prototype.origin = "United States of America";
      target.prototype.manufacturer = Manufacturer.airbus;
      target.prototype.type = "Jet";
      target.prototype.airbusMethod = () => {
        console.log("Function performed by Airbus");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturer.boeing;
      target.prototype.type = "Helicopter";
      target.prototype.boeingMethod = () => {
        console.log("Function performed by Boeing");
      };
    }
  };
}

@AircraftManufacturer(Manufacturer.airbus)
class Airplane implements AircraftInterface {
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

const airplane: AircraftInterface = new Airplane("Airbus A380", "John");

airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log("Method does not exists");

export {};
