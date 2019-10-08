var getCompanyServices = function()
{
    var services_company = 
    [
        {
            id: 1,
            image: 'logica_de_programacao.png',
            name: 'Curso completo de Lógica de Programação e Algoritmos',
            service_description: 'Este curso é fundamental para qualquer indivíduo que deseje trabalhar com TI',
            detailed_description_service: 'O Curso Online de Lógica de Programação é o primeiro treinamento para quem deseja ingressar no mundo da TI. Na verdade, você utiliza a lógica para tudo em seu dia-a-dia. Quando prepara o seu café, você utiliza lógica. Quando você vai à escola, utiliza lógica. E até para investir em um curso na Becode você utiliza lógica. Enfim, utilizamos lógica para quase tudo em nossas vidas, nada mais justo que utilizarmos também para a área de TI. Você verá que todos os assuntos relacionados a TI obrigatoriamente utilizam conceitos e práticas que serão lecionados durante este curso: -> Você precisa desenvolver um site, lógica de programação, -> Um software, precisa de lógica de programação -> Aquele relatório sensacional no Excel, lógica de programação, -> Um aplicativo mobile para o seu chefe/cliente acessar a qualquer momento, de qualquer lugar precisa de lógica de programação, -> Ou seja, para você crescer e evoluir dentro do enorme universo que a TI abrange, é necessário que você possua uma excelente base de conhecimentos sobre lógica de programação, o qual é o objetivo principal deste treinamento.'
        }, 

        {
            id: 2,
            image: 'curso_web_Moderno.png',
            name: 'Curso Web Moderno com JavaScript 2019 COMPLETO + Projetos',
            service_description: 'Pessoas que desejam se tornar desenvolvedores Web Fullstack, dominando tanto backend e frontend',
            detailed_description_service: 'Neste curso iremos abordar o desenvolvimento Web de ponta a ponta, para que você seja capaz de construir uma aplicação com as principais tecnologias do mercado. São 13 cursos dentro de um só. Você irá aprender Javascript, que é hoje a linguagem da atualidade, várias empresas estão migrando suas bases de PHP, Python e outras para terem suas bases completamente feitas em javascript. Também irá aprender Node, os últimos recursos de HTML e  CSS, Gulp, Webpack, jQuery, Bootstrap, React (Tecnologia usada por umas das maiores empresas do mundo, o Facebook), Vue JS, ExpressJS, MySQL e MongoDB. O melhor de tudo é que durante a nossa jornada iremos agrupar essas tecnologias em desafios e projetos para consolidar o seu conhecimento. Você aprenderá a dominar tecnologias de frontend - que é a parte da aplicação executada no browser do usuário, e tecnologias de backend - que é o código executado no lado do servidor. O curso vai abranger essas duas partes, além de se preocupar muito com os fundamentos que são comuns à toda aplicação. '
        }, 

        {
            id: 3,
            image: 'git.png',
            name: 'Git Na Prática - Curso do Básico ao Avançado (Completo)',
            service_description: 'Desenvolvedores, Programadores, Freelancers, Web Designers e qualquer um que esteja interessado em versionar seus trabalhos.',
            detailed_description_service: 'Serão explorados diversos conceitos como criação de branch (frentes de trabalho), resolver possíveis conflitos e publicação do seu projeto na nuvem, entre outros conceitos. Foram adicionados exercícios de fixação para ajuda-lo a lembrar os conceitos. Ah! Já estava esquecendo, elaborei um Guia de Comandos com todos os comandos mais utilizados e estou oferecendo de bônus para você não esquecer mais.'
        }, 

        {
            id: 4,
            image: 'ionic.png',
            name: 'Curso de IONIC 3 Desenvolvendo Aplicativos',
            service_description: 'Todo aluno que tenha interesse em desenvolvimento mobile',
            detailed_description_service: 'O curso de Ionic 3 possui 50 aulas, neste curso o aluno aprende a desenvolver aplicativos mobile usando o ionic com linguagens web como html, css, javascript, angular, entre outras, adquira já o curso e comece a criar seus aplicativos para android e ios de forma simples e prática, atualmente ionic é a linguagem mobile que mais cresce no mercado, torne-se um desenvolvedor mobile e comece a lucrar desenvolvendo seus aplicativos.'
        }, 

        {
            id: 5,
            image: 'react.png',
            name: 'React Js do zero ao avançado na pratica ',
            service_description: 'Qualquer pessoa que deseja aprender de forma prática a criar aplicações com React JS, programadores que desejam aprender a trabalhar com React JS do zero ao avançado e programadores que desejem aprender a desenvolver aplicações profissionais',
            detailed_description_service: 'Neste curso irá descobrir o jeito mais moderno de desenvolver aplicações web e sistemas web, você vai aprender a criar aplicações completas do extremo zero e entendendo na prática como o React Js funciona. O Curso é para qualquer pessoa, desenvolvedores que querem crescer como programadores na área de desenvolvimento web. Então mesmo que você ainda não saiba nada sobre programação e quer começar na area esse curso aqui também é pra você. Vamos aprender na pratica tudo desde o zero á configurar seu ambiente de trabalho e todo ecossistema, entender oque é o react e por que usamos ele, criar seus primeiros projetos e até aplicações completas.'
        } 
    ]

    return services_company;
}

module.exports =
{
    getCompanyServices: getCompanyServices
}