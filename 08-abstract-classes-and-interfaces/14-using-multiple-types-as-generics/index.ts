/*
 * Using Multiple Types As Generics
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

const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> =
  {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "This is a Ferrari",
  };

const honda: Automobile<string, string, string> = {
  type: "car",
  brand: "honda",
  colors: ["silver", "black"],
  description: "This is a Honda",
};

const toyota: Automobile<string, AutomobileBrands, number> = {
  type: "car",
  brand: AutomobileBrands.toyota,
  colors: [52347, 78945],
  description: "This is a Toyota",
};

console.log(ferrari);
console.log(honda);
console.log(toyota);

export {};
