const request = require("request");

const usersApiv1 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v1 - Promise 1",
                    data: body,
                });
            }
        );
    });
};

const usersApiv2 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v2 - Promise 2",
                    data: body,
                });
            }
        );
    });
};

usersApiv1().then((result) => console.log("normal promise chaining v1 result :", result)).catch((err) => console.log("normal promise v1 chaining error: ", err))
usersApiv2().then((result) => console.log("normal promise chaining v2 result :", result)).catch((err) => console.log("normal promise v2 chaining error: ", err))





Promise.all([usersApiv1(), usersApiv2()])
    .then((result) => console.log("Promise All result ", result))
    .catch((err) => console.log("Promise All error ", err));


Promise.race([usersApiv1(), usersApiv2()])
    .then((result) => console.log("Promise race result ", result))
    .catch((err) => console.log("Promise race error ", err))