const path=require('path');

const rootDir=require('../util/path');

exports.adminController= (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};
