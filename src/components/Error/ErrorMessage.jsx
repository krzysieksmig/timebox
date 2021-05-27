
function errorMessage({hasError, message = "", children}){
    return hasError? message : children;
}

export default errorMessage;