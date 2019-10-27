var fs = require('fs');
var crypto = require('crypto');

var usersFilePath = 'db/users.json';

var loadFileUsers = function() 
{
    var fileData = fs.readFileSync(usersFilePath, 'utf8');
    var users = JSON.parse(fileData);

    return users;
}

var getUserByEmail = function(email)
{
    var users = loadFileUsers();
    var user = users.find( u => u.email === email );
    return user;
}

var validateUserEmailAndPassword = function( email, password )
{
    var user = this.getUserByEmail(email);

    if ( user != null )
    {
        var passwordHash = crypto.createHash('md5').update(password).digest('hex');

        if ( passwordHash === user.password )
        {
            return true;
        }
    }

    return false;
}

var rand = function()
{
    return Math.random().toString(36).substr(2);
};

var generateToken = function()
{
    return rand() + rand();
};

module.exports = 
{
    validateUserEmailAndPassword: validateUserEmailAndPassword,
    getUserByEmail: getUserByEmail,
    generateToken: generateToken,
}