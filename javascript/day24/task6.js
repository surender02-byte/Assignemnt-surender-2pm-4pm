
// Validate number input using try/catch

function ValidateNumber(value){
try {
    if(value===""){
    throw " input connat be empty";}
    if (isNaN(value)){
        throw "is not A number"
    };
    
} catch (error) {
    console.log("error:",error);
    
}
finally{
    console.log("validation completed");
    
}
};
ValidateNumber("4");
