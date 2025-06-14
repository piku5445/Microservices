const urlVersioning=(req,res,next)=>{
    if(req.path.startsWith('/v1/')) {
        req.apiVersion = 'v1';
    }
}