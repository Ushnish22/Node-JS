const Product = require('../models/product')

const path=require('path');

const rootDir=require('../util/path');

exports.adminController= (req,res,next) => {
    const products=Product.fetchAll();
    products.push({title:req.body.title});
    console.log(products);
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.shopController=(req,res,next)=>{
    const products=Product.fetchAll();
    products.push({title:req.body.title});
    console.log(products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));

}

exports.contactuscontroller=(req,res) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}

exports.successController= (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};

exports.postAdminController = (req,res,next) =>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
}
