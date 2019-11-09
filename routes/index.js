var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService'); // Como se fosse o include do JavaScript...
var companyServices = require('../services/companyService');
var shoppingCartServices = require('../services/shoppingCartServices');

/* GET home page. */
router.get('/', function(req, res, next) // Rotas da aplicação web... configuração das rotas e respostas ao chamado da navegação web...
{
  var posts = postsService.getPosts();
  var projects = projectsService.getProjects();
  var services_company = companyServices.getCompanyServices();
  var carts = shoppingCartServices.getShoppingCart();
    
  res.render('index', {title: 'Blog', posts: posts, projects: projects, services_company: services_company, carts: carts}); // Passa Arquivo de view e recheia com os outros dados...
});

//-----------------------------------------------------------------------------------------------

router.get('/posts', function(req, res, next)
{
  var posts = postsService.getPosts();

  res.render('posts', {title: 'Languages', posts: posts});
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

//--------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------

router.get('/services_company', function(req, res, next) {
  var services_company = companyServices.getCompanyServices();

  res.render('services_companys', { title: 'Serviços da companhia', services_company: services_company });
});


router.get('/services_company/:service_companyId', function(req, res, next){

  var service_companyId = req.params.service_companyId;

  var services_company = companyServices.getCompanyServices();

  var service_company = services_company.filter((service_company) => service_company.id == service_companyId)[0];

  res.render('service_company', { title: service_company.name, service_company: service_company });

});

// Carrinho de compras

router.get('/shoppingCart', function(req, res, next){

  var carts = shoppingCartServices.getShoppingCart();

  res.render('shoppingCarts', { title: 'Shopping list', carts: carts } );
});

router.get('/shoppingCart/:shoppingCartId', function(req, res, next){

  var shoppingCartId = req.params.shoppingCartId;

  var carts = shoppingCartServices.getShoppingCart();

  var cart = carts.filter((cart) => cart.id == shoppingCartId )[0];
  
  res.render('shoppingCart', { title: 'Product', cart: cart });

});

module.exports = router;