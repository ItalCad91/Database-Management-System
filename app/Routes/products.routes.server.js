import { Router } from "express";

import { DisplayProductList, DisplayProductAddPage, ProcessProductAddPage, DisplayProductEditPage, ProcessProductEditPage, ProcessProductDelete } from "../Controllers/products.controller.server.js";


const router = Router();

router.get('/products-list', DisplayProductList);
router.get('/products-add', DisplayProductAddPage);
router.post('/products-add', ProcessProductAddPage);
router.get('/products-edit/:id', DisplayProductEditPage);
router.post('/products-edit/:id', ProcessProductEditPage);
router.get('/products-delete/:id', ProcessProductDelete);

export default router;
