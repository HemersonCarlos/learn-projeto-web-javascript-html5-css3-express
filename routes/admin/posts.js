// Rota para a página de adminstração dos posts

var express = require('express');
var router = express.Router();
var postsService = require('../../services/postsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next){

    var posts = postsService.getPosts();

    var data = {
        posts: posts
    };

    res.render('admin/posts/index', data);
});

router.get('/create', function(req, res, next){

    res.render('admin/posts/create')
});

router.post('/create', upload.single('image'), function(req, res, next){

    var posts = postsService.getPosts();

    var newId = posts.length + 1;

    var newPost = {};
    newPost.id = newId;
    newPost.title = req.body.title;
    newPost.image = req.file.filename;
    newPost.description = req.body.description;
    newPost.body = req.body.body;

    postsService.savePost(newPost);

    res.redirect('/admin/posts');
})

module.exports = router;