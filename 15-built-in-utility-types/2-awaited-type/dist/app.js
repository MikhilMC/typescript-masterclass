"use strict";
/*
 * Awaited<Type>
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!");
    }, 1000);
});
