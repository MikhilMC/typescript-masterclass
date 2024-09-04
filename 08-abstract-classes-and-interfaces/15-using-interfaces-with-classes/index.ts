/*
 * Using Interfaces With Classes
 */

enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile<Type, Brand, Color> {
  type: Type;
  brand: Brand;
  colors: Color[];
  description: string;
}

class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = "car";

  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {}
}

const ferrari: Car = new Car(
  AutomobileBrands.ferrari,
  [AutomobileColors.red, AutomobileColors.black],
  "This is a Ferrari"
);

console.log(ferrari);

export {};
