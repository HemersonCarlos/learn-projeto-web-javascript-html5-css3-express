var express = require('express');
var router = express.Router();
var shoppingCartServices = require('../../services/shoppingCartServices');

router.get('/', function(req, res, next){

    

    res.render('admin/shoppingCarts/index');

});

module.exports = router;