var getPosts = function() // Variável que ajuda chamar a função com todos os posts...
{
    var posts = // Armazena todos os posts em uma lista que é um array...
    [
        {
            id: 1,
            title: 'Linguagem de programação C',
            image: 'post1.png',
            description: 'C, é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização (ISO).',
            body: 'O desenvolvimento inicial de C ocorreu no AT&T Bell Labs entre 1969 e 1973.[9] de acordo com Ritchie, o período mais criativo ocorreu em 1972. A linguagem foi chamada "C", porque suas características foram obtidas a partir de uma linguagem anteriormente chamado de "B", que de acordo com a Ken Thompson era versão reduzida da linguagem de programação BCPL. A versão original PDP-11 do sistema Unix foi desenvolvido em assembly. Em 1973, com a adição dos tipos struct, a linguagem C tornou-se poderosa o suficiente para que a maior parte do kernel do Unix fosse reescrito em C. Este foi um dos primeiros núcleos de sistemas operacionais implementados numa linguagem diferente da linguagem Assembly. Em 1977, foram feitas novas mudanças por Ritchie e Stephen C. Johnson para facilitar a portabilidade do sistema operacional Unix. O Portable C Compiler de Johnson serviu de base para várias implementações de C em novas plataformas.',
        },

        {
            id: 2,
            title: 'Linguagem de programação C++',
            image: 'post2.png',
            description: 'C++ (em português: lê-se "cê mais mais", em inglês lê-se see plus plus) é uma linguagem de programação compilada multi-paradigma (seu suporte inclui linguagem imperativa, orientada a objetos e genérica) e de uso geral.',
            body: 'O C++ foi inicialmente desenvolvido por Bjarne Stroustrup dos Bell Labs, durante a década de 1980 com o objetivo implementar uma versão distribuída do núcleo Unix.[4] Como o Unix era escrito em C, dever-se-ia manter a compatibilidade, ainda que adicionando novos recursos. Alguns dos desafios incluíam simular a infraestrutura da comunicação entre processos num sistema distribuído ou de memória compartilhada e escrever drivers para tal sistema. Stroustrup percebeu que a linguagem Simula 67 possuía características bastante úteis para o desenvolvimento de software, mas que era muito lenta para uso prático. Por outro lado, a linguagem BCPL era rápida, mas possuía demasiado baixo nível, dificultando sua utilização no desenvolvimento de aplicações. A partir de sua experiência de doutorado, começou a acrescentar elementos do Simula 67 no C, especialmente os recursos de criação e manipulação de objetos. O C foi escolhido como base de desenvolvimento da nova linguagem pois possuía uma proposta de uso genérico, era rápido e também portável para diversas plataformas. Algumas outras linguagens que também serviram de inspiração para o cientista da computação foram ALGOL 68, Ada, CLU e ML.'
        },

        {
            id: 3,
            title: 'Linguagem de programação C#',
            image: 'post3.png',
            description: 'C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.',
            body: 'C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java. O código fonte é compilado para Common Intermediate Language (CIL) que é interpretado pela máquina virtual Common Language Runtime (CLR). C# é uma das linguagens projetadas para funcionar na Common Language Infrastructure da plataforma .NET Framework.'
        }
    ];

    return posts;
}

module.exports = // Funcção que o resto do sistema pode acessar e olhar essa variável....
{
    getPosts: getPosts // Primeiro e referenciado fora (getPosts) e ou outro e referenciado dentro (getPosts)....
}