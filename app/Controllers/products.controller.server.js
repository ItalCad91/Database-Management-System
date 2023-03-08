import productModel from '../Models/products.js';

export function DisplayProductList(req, res, next){
  productModel.find(function(err, productCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'products/list', products: productCollection});
    })
}

export function DisplayProductAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'products/edit', product: {} });
}

export function ProcessProductAddPage(req, res, next){
    
    let newProduct = productModel({
        productName: req.body.productName,
        productID: req.body.productID,
        quantityAvailable: req.body.quantityAvailable,
        price: req.body.price,
        quantitySold: req.body.quantitySold
    });

    productModel.create(newProduct, (err, Product) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/products-list')
    } )
}



export function DisplayProductEditPage(req, res, next){
    let id = req.params.id;

    productModel.findById(id, (err, product) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contact', page: 'products/edit', product: product });
    });    
}



export function ProcessProductEditPage(req, res, next){

    let id = req.params.id;
    
    let newProduct = productModel({
        _id: req.body.id,
        productName: req.body.productName,
        productID: req.body.productID,
        quantityAvailable: req.body.quantityAvailable,
        price: req.body.price,
        quantitySold: req.body.quantitySold
    });

    productModel.updateOne({_id: id }, newProduct, (err, Product) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/products-list')
    } )
}



export function ProcessProductDelete(req, res, next){
    let id = req.params.id;

    productModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/products-list');
    })
}
