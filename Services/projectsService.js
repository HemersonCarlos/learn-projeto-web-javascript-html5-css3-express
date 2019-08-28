var getProjects = function()
{
    var projects = 
    [
        {
            id: 1,
            name: 'Spring Framework',
            image: 'project1.png',
            description: 'O Spring é um framework open source para a plataforma Java criado por Rod Johnson e descrito em seu livro "Expert One-on-One: JEE Design e Development". Trata-se de um framework não intrusivo, baseado nos padrões de projeto inversão de controle (IoC) e injeção de dependência.',
            subject:'O Spring é um framework open source para a plataforma Java criado por Rod Johnson e descrito em seu livro "Expert One-on-One: JEE Design e Development". Trata-se de um framework não intrusivo, baseado nos padrões de projeto inversão de controle (IoC) e injeção de dependência.  No Spring o container se encarrega de "instanciar" classes de uma aplicação Java e definir as dependências entre elas através de um arquivo de configuração em formato XML, inferências do framework, o que é chamado de auto-wiring ou ainda anotações nas classes, métodos e propriedades. Dessa forma o Spring permite o baixo acoplamento entre classes de uma aplicação orientada a objetos. O Spring possui uma arquitetura baseada em interfaces e POJOs (Plain Old Java Objects), oferecendo aos POJOs características como mecanismos de segurança e controle de transações. Também facilita testes unitários e surge como uma alternativa à complexidade existente no uso de EJBs. Com Spring, pode-se ter um alto desempenho da aplicacao. Esse framework oferece diversos módulos que podem ser utilizados de acordo com as necessidades do projeto, como módulos voltados para desenvolvimento Web, persistência, acesso remoto e programação orientada a aspectos.'        
        },

        {
            id: 2,
            name: 'Bootstrap Framework',
            image: 'project2.png',
            description: 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.',
            subject:'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo. O Bootstrap é um dos projetos mais bem avaliado no site GitHub, com mais de 111 600 estrelas e 51 500 forks. Possui ampla documentaçao na pagina oficial: https://getbootstrap.com/, assim como diversos tutoriais e materiais em português.'          
        },

        {
            id: 3,
            name: 'Apache Cordova Framework',
            image: 'project3.svg',
            description: 'Apache Cordova (anteriormente PhoneGap ) é uma estrutura de desenvolvimento de aplicativos móveis originalmente criada pela Nitobi . A Adobe Systems comprou a Nitobi em 2011, renomeou como PhoneGap e depois lançou uma versão de código aberto do software chamado Apache Cordova.',
            subject:'Apache Cordova (anteriormente PhoneGap ) é uma estrutura de desenvolvimento de aplicativos móveis originalmente criada pela Nitobi . A Adobe Systems comprou a Nitobi em 2011, renomeou como PhoneGap e depois lançou uma versão de código aberto do software chamado Apache Cordova. O Apache Cordova permite que os programadores de software criem aplicativos para dispositivos móveis usando CSS3 , HTML5 e JavaScript em vez de depender de APIs específicas da plataforma, como as do Android , iOS ou Windows Phone. Ele permite o encapsulamento de código CSS, HTML e JavaScript, dependendo da plataforma do dispositivo. Ele estende os recursos de HTML e JavaScript para trabalhar com o dispositivo. Os aplicativos resultantes são híbridos, o que significa que eles não são aplicativos móveis realmente nativos (porque toda a renderização de layout é feita por meio de visualizações da Web em vez da estrutura de UI nativa da plataforma) nem puramente baseados na Web (porque não são apenas aplicativos da Web, mas são empacotados como aplicativos para distribuição e acesso a APIs de dispositivos nativos). A mistura de snippets de código nativo e híbrido é possível desde a versão 1.9.'          
        },
    ];

    return projects;
}

module.exports = 
{
    getProjects: getProjects
}