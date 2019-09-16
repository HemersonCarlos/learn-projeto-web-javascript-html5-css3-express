var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService'); // Como se fosse o include do JavaScript...

/* GET home page. */
router.get('/', function(req, res, next) // Rotas da aplicação web... configuração das rotas e respostas ao chamado da navegação web...
{
  var posts = postsService.getPosts();
  var projects = projectsService.getProjects();
    
  res.render('index', {title: 'Blog', posts: posts, projects: projects }); // Passa Arquivo de view e recheia com os outros dados...
});

router.get('/posts', function(req, res, next)
{
  var posts = postsService.getPosts();

  res.render('posts', {title: 'Blog', posts: posts});
});

router.get('/posts/:postId', function(req, res, next)
{
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  /*
  for ( var i = 0; i < posts.length; i++ ) // Outra forma de fazer ele chamar o post...
  {
    if( posts[i].id == postId )
    {
      var post = posts[i];
    }
  }
  */

  var post = posts.filter((post) => post.id == postId ) [0];

  res.render('post', {title: post.title, post: post});


});

router.get('/projects', function(req, res, next)
{
  var projects = projectsService.getProjects();

  res.render('projects', { title: 'Blog', projects: projects });
});

router.get('/project/:projectId', function(req, res, next)
{
  var projectId = req.params.projectId;

  var projects = projectsService.getProjects();

  var project = projects.filter((project) => project.id == projectId)[0];

  res.render('project', { title: project.title, project: project });
});

module.exports = router;
