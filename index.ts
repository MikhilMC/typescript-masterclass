/**
 * OBJECTS
 */

/**
 * Working with objects
 */

let person = {
  name: "Mark",
  age: 32,
};

let car: Object = {
  brand: "BMW",
  color: "Black",
};

// not needed
car = [];
car = () => {};

let newCar: {
  brand: string;
  color: string;
} = {
  brand: "Audi",
  color: "White",
};

newCar = [];

/**
 * Type alias for objects
 */
let post: {
  title: string;
  content: string;
  date: Date;
} = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
};

type Post = {
  title: string;
  content: string;
  date: Date;
};

let post2: Post = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
};

/**
 * Nested objects
 */

// type Post2 = {
//   title: string;
//   content: string;
//   date: Date;
//   author: {
//     name: string;
//     age: number;
//     email: string;
//   };
// };

type Author = {
  name: string;
  age: number;
  email: string;
};

type Post2 = {
  title: string;
  content: string;
  date: Date;
  author: Author;
};

let post3: Post2 = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
  },
};

/**
 * Index signatures with objects
 */
type Author2 = {
  name: string;
  age: number;
  email: string;
};

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [key: string]: AwardDetails;
};

type Post3 = {
  title: string;
  content: string;
  date: Date;
  author: Author2;
  awards: Awards;
};

let post4: Post3 = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
  },
  awards: {
    web: {
      name: "Web awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
};

/**
 * Optional and Readonly properties
 */

type Author3 = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
};

type Post4 = {
  title: string;
  content: string;
  date: Date;
  author: Author3;
  awards: Awards;
  category?: string;
};

let post5: Post4 = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
    type: "human",
  },
  awards: {
    web: {
      name: "Web awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
  category: "javascript",
};

let post6: Post4 = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
    type: "human",
  },
  awards: {
    web: {
      name: "Web awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
};

post6.author.type = "ai";

/**
 * Union types with object
 */
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let hybridAnimal: DogAndCatUnion = {
  name: "Bob",
  barks: true,
  wags: true,
  purrs: true,
};

let partialDog: DogAndCatUnion = {
  name: "Blacky",
  barks: true,
};

/**
 * Discriminating union
 */
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Loading...";

    case "failed":
      return `Error ${state.code}`;

    case "success":
      return `Downloading ${state.response.title}`;

    default:
      break;
  }
}

/**
 * Intersection types
 */
type Dog2 = {
  name: string;
  barks: boolean;
  color: string;
};

type Cat2 = {
  name: string;
  purrs: boolean;
  color: string;
};

type HybridAnimal = Dog2 & Cat2;

let hybridAnimal2: HybridAnimal = {
  name: "Max",
  color: "White",
  purrs: false,
  barks: true,
};
