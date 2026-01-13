let myPromise = new Promise(function (resolve, reject) {
    resolve("Success");
});

myPromise.then(function (message) {
    console.log(message);
});
