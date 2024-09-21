"use strict";
/*
 * keying-in or Index Accessed Types
 */
function fetchUserDetails(name) {
    return new Promise((res, rej) => {
        if (name) {
            res({
                id: 23,
                name: "John",
                servicesList: {
                    count: 2,
                    services: [
                        {
                            id: 1,
                            name: "Accounting",
                            price: 49,
                        },
                        {
                            id: 2,
                            name: "Design",
                            price: 19,
                        },
                    ],
                },
            });
        }
        else
            rej(new Error("Pass a new valid name"));
    });
}
function printServicesList(services) {
    console.log(services);
}
fetchUserDetails("John")
    .then((res) => {
    console.log(res);
    printServicesList(res.servicesList);
})
    .catch((err) => console.log(err));
