import express from "express"; // is importing the Express module from the NPM package named "express". 

import router from "./app/Routes/index.routes.server.js" 

//THIRD PARTY MODULES:
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from"cookie-parser";

//ES MODULES FIX FOR __DIRNAME
import path, {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));





const app = express(); //Creates an instance of the Express application. This instance will be used to configure the behavior of the web server. 


//SETTING UP MIDDLEWARES
app.set('view engine', "ejs"); // SETTING UP THE APPLICATION TO USE EJS FILES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.set('views', path.join(__dirname, '/app/Views'));
app.use(express.static(path.join(__dirname,'/public'))); //Here we are saying that everything under public folder are static files, which means they are on the client side.
app.use(session({ secret: 'Mysecret', saveUninitialized: false, resave: false}));


// Mount the router on the app instance
app.use('/', router); 

app.listen(3000); 