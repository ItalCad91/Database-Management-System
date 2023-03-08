
//THIRD PARTY MODULES
import express, { urlencoded } from "express"; // is importing the Express module from the NPM package named "express".
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//ES MODULES FIX FOR __DIRNAME
import path, {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));



//IMPORT MONGOOSE
import mongoose from "mongoose";
mongoose.set('strictQuery', true);


//CONFIGURATION MODULE SESSION AND MONGODB
import { Secret, MongoURL } from '../config/config.js';

// Method to establish a connection to a MongoDB database using Mongoose Library
mongoose.connect(MongoURL);

//CHECK IF OUR APPLICATION IS CONNECTED TO MONGO OR NOT
const db = mongoose.connection;
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("MongoDB Connection ERROR"));




//IMPORT ROUTES
import router from "./Routes/index.routes.server.js";
import productRouter from "./Routes/products.routes.server.js"

//INSTANTIATE EXPRESS
const app = express();




//SETTING UP MIDDLEWARES:
app.set('views', path.join(__dirname, '/Views'));
app.set('view engine', "ejs"); // SETTING UP THE APPLICATION TO USE EJS FILES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../public'))); // This makes the contents of the "public" directory in your project's directory accessible to the client-side.

app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));



app.use('/', router);
app.use('/', productRouter);

export default app;
