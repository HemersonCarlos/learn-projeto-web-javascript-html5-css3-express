var express = require('express');
var router = express.Router();
var authService = require('../services/authService');

router.get('/login', function(req, res, next){

    res.render('login', { msg: '' });
});

router.post('/login', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    if( authService.validateUserEmailAndPassword( email, password ) )
    {
        if( !req.session.authenticatedUsers )
        {
            req.session.authenticatedUsers = [];
        }

        var user = authService.getUserByEmail(email);

        user.loginToken = authService.generateToken();

        req.session.authenticatedUsers.push(user);

        res.cookie('loginToken', user.loginToken, { maxAge: 900000, httpOnly: true });

        res.redirect('/admin/posts');
    }

    res.render('login', { msg: 'Email e senha incorretos!' });
});

router.get('/logout', function(req, res, next){

    var loginToken = req.cookies['loginToken'];

    if( req.session.authenticatedUsers )
    {
        var authenticatedUsers = req.session.authenticatedUsers;
        var user = authenticatedUsers.find( u => u.loginToken === loginToken );

        if( user )
        {
            //Remove o usuario da session
            authenticatedUsers.splice(authenticatedUsers.findIndex ( u => u.loginToken === loginToken ));
            res.clearCookie("loginToken");
        }
    }

    res.redirect('/');

});

module.exports = router;