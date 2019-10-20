var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage
({
    destination: function(res, file, cb)
    {
        cb(null, 'public/images/');
    },

    filename: function(req, file, cb)
    {
        var fileExt = path.extname(file.originalname);
        var fileName = file.fieldname + '-' + Date.now() + fileExt;
        cb(null, fileName);
    }
});

var upload = multer( { storage: storage } );

module.exports = upload;