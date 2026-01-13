let login = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Login successful");
    }, 2000);
});

async function loginUser() {
    let result = await login;
    console.log(result);
}

loginUser();

