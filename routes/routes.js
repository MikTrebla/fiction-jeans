const router = require("express").Router();
const Product = require('../models/products.js');
const User = require('../models/users.js');
///// GET ROUTES /////
//get all products from db
router.get('/api/getproduct', function(req,res) {
    Product.find()
    .then(response => {
        res.json(response);
        console.log(response);
    })
    .catch(error => {
        res.json(error);
    })
})
//GET route to get single product from db
router.get('/api/product/:id', function(req,res){
    Product.find({
        _id:req.params.id
    })
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        res.json(error);
    })
})
////////POST ROUTES //////
//route to add new product to db
router.post('/api/addproduct', function(req,res) {
    Product.create({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        // productImage: req.body.files.upload.data,
        defaultImage:"http://spartacus.s9y.org/cvs/additional_themes/wp/preview_fullsize.jpg",
        category:req.body.category
    })
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.json(error);
    })
});
//POST route to redirect to single product page
router.post('/shop/:id', function(req,res) {
    Product.find({
        _id:req.params.id
    })
    .then(results => {
        res.json(results);
    })
    .catch(errors => {
        res.json(errors);
    })
})
//POST route to filter store page by search bar ONLY
router.post('/api/filterByInput', function(req,res){
    Product.find({
        productName:req.body.search
    })
    .then(results => {
        res.json(results);
    })
    .catch(errors => {
        res.json(errors);
    })
})

//POST route to filter store page by PRE RENDERED BUTTONS ONLY
router.post('/api/filterByCategory', function(req,res){
    console.log(req.body.category)
    Product.find({
        category:{$in:req.body.category}
    })
    .then(results => {
        res.json(results);
    })
    .catch(errors => {
        res.json(errors);
    })
})
module.exports = router;