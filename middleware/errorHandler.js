//custom error class

class APIError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500; // Default to 500 if no status code is provided
        this.name="APIError"
        this.isOperational = true; // Indicate that this is an operational error
    }
}const asyncHandler=(fn)=>(req,res,next)=>{
promise.resolve(fn(req,res,next)).catch(next)
}
const globalErrorHandler=(err,req,res,next)=>{

    console.error(err.stack); // Log the error for debugging
    if(err instanceof APIError){
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined // Only show stack in development
        });
    }   
    //hnade mongoose validation error
    else if(err.name==ReportBody.json().promise<any>
        'ValidationError') {
        return res.status(400).json({
            status: 'error',
            message: err.message,
            errors: err.errors // Include validation errors
        });
    }
    //handel mongoose validation
    else if(err.name=='ValidationError'){
        return res.status(400).json({
            status:'error',
            message: 'Validation Error',
        })
        
    }
    else{
        
           return res.status(500).json({
            status:'error',
            message: 'emexpexted error',
        })
    }
}
module.exports={APIError,asyncHandler,globalErrorHandler}