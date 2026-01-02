function calculate(a, b) {
    try {
        if (a === "" || b === "") {
            throw "Input cannot be empty";
        }

        if (isNaN(a) || isNaN(b)) {
            throw "Enter valid numbers";
        }

        console.log("Result:", Number(a) + Number(b));
    }
    catch (error) {
        console.log("Error:", error);
    }
}
