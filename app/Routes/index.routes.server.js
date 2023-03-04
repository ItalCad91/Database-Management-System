import { Router } from "express";

/* ⬆️
The Router class is a part of the express module and provides a way to create modular and mountable route handlers. It can be used to define a set of routes that can be reused across different parts of an application. 
*/
import {displayHomePage, displayAboutPage, displayServicesPage} from '../Controllers/index.controllers.server.js';

const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/services', displayServicesPage);

export default router;
