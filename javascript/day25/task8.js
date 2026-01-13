let apiCall = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Data received");
    }, 2000);
});

apiCall.then(function (data) {
    console.log(data);
});
