var fs = require('fs');

var shoppingCartFilePath = 'db/shoppingCarts.json'; 

var getShoppingCart = function()
{
    var fileData = fs.readFileSync(shoppingCartFilePath, 'utf8');

    var shoppingCart = JSON.parse(fileData);

    return shoppingCart; 
}

module.exports = 
{
    getShoppingCart: getShoppingCart
}