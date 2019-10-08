var fs = require('fs');

var postsFilePath = 'db/posts.json';

var loadFilePosts = function()
{
    var fileData = fs.readFileSync(postsFilePath, 'utf8');
        
    var posts = JSON.parse(fileData);
    
    return posts;
}

var saveFilePosts = function(posts)
{
    var data = JSON.stringify(posts);
    fs.writeFileSync(postsFilePath, data, 'utf8');
}

var getPosts = function() // Variável que ajuda chamar a função com todos os posts...
{  
    /*
    var posts = // Armazena todos os posts em uma lista que é um array...
    [
        {
            Onde ficava os posts...
        },

        {
            Onde ficava os posts...
        }
    ];
    */
    var posts = loadFilePosts();
    
    return posts;
}

var savePost = function(newPost)
{
    var posts = loadFilePosts();
    posts.push(newPost);
    saveFilePosts(posts);
}

module.exports = // Funcção que o resto do sistema pode acessar e olhar essa variável....
{
    getPosts: getPosts, // Primeiro e referenciado fora (getPosts) e ou outro e referenciado dentro (getPosts)....
    savePost: savePost
}