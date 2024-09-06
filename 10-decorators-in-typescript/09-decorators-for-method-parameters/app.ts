/*
 * Decorators For Method Parameters
 */

enum Manufacturer {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  pilotName: (name: string, lastName: string) => void;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function ParameterDecorator(
  classPrototype: Object,
  methodName: string,
  index: number
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

class Airplane implements AircraftInterface {
  constructor(public _aircraftModel: string) {
    console.log("Aircraft Class Instantiated");
  }

  public static seatCount(): void {
    console.log("150 seats");
  }

  public pilotName(name: string, @ParameterDecorator lastName: string) {
    console.log(name);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane: AircraftInterface = new Airplane("Airbus A380");

export {};
