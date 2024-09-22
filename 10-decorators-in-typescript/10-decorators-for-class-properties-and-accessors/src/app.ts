/*
 * Decorators For Class Properties And Accessors
 */

function PropertyDecorator() {
  return function FieldDecorator(target: any, propertyKey: string): void {
    console.log(target);
    const fieldName = propertyKey;
    console.log(`Accessing the ${fieldName}`);
  };
}

function AccessorDecorator() {
  return function GetterDecorator(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<string>
  ): TypedPropertyDescriptor<string> | void {
    const originalGetter = descriptor.get!;

    descriptor.get = function () {
      console.log(target);
      console.log(`${propertyKey} was accessed`);
      return originalGetter.call(this);
    };

    return descriptor;
  };
}

class Airplane {
  @PropertyDecorator()
  public _aircraftModel: string;

  constructor(aircraftModel: string) {
    this._aircraftModel = aircraftModel;
  }

  public static seatCount(): void {
    console.log("150 seats");
  }

  public pilotName(name: string, lastName: string) {
    console.log(name);
  }

  @AccessorDecorator()
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane: Airplane = new Airplane("Boeing");
console.log(airplane.aircraftModel);
