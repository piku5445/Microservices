//->major releases -> API -> V1,V2

require('dotenv').config()
const express = require('express');
const configureCors = require('./config/corsConfig'); // Assuming corsConfig.js is in the config folder
const cors = require('cors');

const app = express();
const {globalErrorHandler} = require('./middleware/errorHandler'); // Assuming errorHandler.js is in the middleware folder
app.use(globalErrorHandler); // Use the global error handler        
const {
    requestLogger,

    addTimestamp
}= require('./middleware/customMiddleware'); // Assuming customMiddleware.js is in the middleware folder
const port = process.env.PORT || 3000;
app.use(configureCors()); // Use the CORS configuration
app.use(requestLogger)
app.use(cors());
app.use(express.json());
app.listen(port, () => {      
    console.log(`Server is running on port ${port}`);
  })