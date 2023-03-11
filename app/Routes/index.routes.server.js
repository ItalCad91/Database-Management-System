// Author:Riccardo Reali
// Date: 15-02-2023


import { Router } from "express";

import {displayHomePage, displayAboutPage, displayServicesPage, displayContactPage, displayThankYouPage, displayProfilePage} from '../Controllers/index.controllers.server.js';

const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/services', displayServicesPage);
router.get('/contactus', displayContactPage);
router.get('/ThankYou', displayThankYouPage);
router.get('/profile', displayProfilePage);

export default router;
