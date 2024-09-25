/*
 * Awaited<Type>
 */

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 1000);
});

type AwaitedType = Awaited<typeof Promise>;
