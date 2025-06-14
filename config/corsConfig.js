const cors=require('cors')
const configureCors=()=>{
    return cors({
        //origin -> this will tell that which origin you want to allow to access ypur api
        origin:(origin, callback) => {
            // Allow requests with no origin (like mobile apps, curl requests)
            if (!origin) return callback(null, true);
            // Allow specific origins
            const allowedOrigins = [
                'http://localhost:3000', //local dev
                'https://example.com']; //production domain
            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            } else {
                return callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization',
            'Accept-Version',
        ],
        exposedHeaders: ['Content-Length', 'X-Requested-With','Content-Range','X-Total-Count'],
        credentials: true, // Allow cookies to be sent
        preflightContinue: false, // Pass the CORS preflight response to the next handler
        maxAge:600 ,// Cache preflight response for 10 minutes->avoid sending option request multiple times
      optionsSuccessStatus:204 // Some legacy browsers (IE11, various SmartTVs) choke on 204

    })
}
module.exports=configureCors;