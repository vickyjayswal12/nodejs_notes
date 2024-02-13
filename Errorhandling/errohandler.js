class ErrorHandler {
    constructor(status,message){
        this.status=status;
        this.message=message
    }
    //static method doesn't require class object for calling method we can call direct static method using class

    static ValidationError(message="enter valid details"){
        return new ErrorHandler(422,message)
    }

    static NotFoundError(message="page not found"){
        return new ErrorHandler(404,message)
    }
}
module.exports=ErrorHandler;