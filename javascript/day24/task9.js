function login(username, password) {
    try {
        if (username === "" || password === "") {
            throw "All fields are required";
        }

        console.log("Login successful");
    }
    catch (error) {
        console.log("Login error:", error);
    }
}
