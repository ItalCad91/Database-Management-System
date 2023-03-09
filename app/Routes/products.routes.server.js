import { Router } from "express";

import express from 'express';

import Product from '../Models/products.js';

import { DisplayProductList, DisplayProductAddPage, ProcessProductAddPage, DisplayProductEditPage, ProcessProductEditPage, ProcessProductDelete } from "../Controllers/products.controller.server.js";


const router = Router();

router.get('/products-list', DisplayProductList);
router.get('/products-add', DisplayProductAddPage);
router.post('/products-add', ProcessProductAddPage);
router.get('/products-edit/:id', DisplayProductEditPage);
router.post('/products-edit/:id', ProcessProductEditPage);
router.get('/products-delete/:id', ProcessProductDelete);

//SEARCH BAR

// define the search route
router.get('/search', async (req, res) => {
  try {
    // extract the query from the request object
    const query = req.query.query;

    // search for products that match the query
    const products = await Product.find({
      productName: { $regex: query, $options: 'i' },
    });

    // return the products that match the query
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send('Failed to retrieve search results');
  }
});



export default router;
