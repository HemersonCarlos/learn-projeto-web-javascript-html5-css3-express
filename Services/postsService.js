var getPosts = function()
{
    var posts = 
    [
        {
            title: 'Post 1',
            image: 'post1.png',
            description: 'Meu primeiro post...',
            body: 'Meu primeiro post....'
        },

        {
            title: 'Post 2',
            image: 'post2.png',
            description: 'Meu segundo post...',
            body: 'Meu segundo post....'
        },
    ];

    return posts;
}

module.exports = 
{
    getPosts: getPosts
}