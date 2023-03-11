// Author:Riccardo Reali
// Date: 15-02-2023


import { Router } from "express";

import express from 'express';


import { DisplayProductList, DisplayProductAddPage, ProcessProductAddPage, DisplayProductEditPage, ProcessProductEditPage, ProcessProductDelete, searchRoute } from "../Controllers/products.controller.server.js";


const router = Router();

router.get('/products-list', DisplayProductList);
router.get('/products-add', DisplayProductAddPage);
router.post('/products-add', ProcessProductAddPage);
router.get('/products-edit/:id', DisplayProductEditPage);
router.post('/products-edit/:id', ProcessProductEditPage);
router.get('/products-delete/:id', ProcessProductDelete);
//DEFINE THE SEARCH BAR ROUTE
router.get('/search', searchRoute);


export default router;
