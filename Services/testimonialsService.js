var getTestimonials = function()
{
    var testimonials = 
    [
        {
            id: 1,
            name: 'Fulano',
            company: 'Texas Park System',
            title: 'Cata da TI',
            testimony: 'Eu gosto muito de Linguagens de programação'
        },

        {
            id: 2,
            name: 'Joaozinho',
            company: 'Userss Technical Park',
            title: 'Cara da Administração',
            testimony: 'EU gosto muito de javascript e java'
        }
    ];

    return testimonials;
}



// Exportar a função no module...
module.exports = 
{// Referencia fora : nome do arquivo interno
    getTestimonials: getTestimonials
}