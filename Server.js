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

app.use('/', router); // Mount the router on the app instance

app.listen(3000); 