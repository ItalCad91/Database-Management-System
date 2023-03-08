// Author:Riccardo Reali
// Date: 15-02-2023


import { Router } from "express";

import {displayHomePage, displayAboutPage, displayServicesPage, displayContactPage} from '../Controllers/index.controllers.server.js';

const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/services', displayServicesPage);
router.get('/contactus', displayContactPage);

export default router;
