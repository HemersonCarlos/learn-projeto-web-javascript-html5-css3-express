var fs = require('fs');

var testimonialsFilePath = 'db/testimonials.json';

var loadFileTestimonials = function()
{
    var fileData = fs.readFileSync(testimonialsFilePath);

    var testimonials = JSON.parse(fileData);

    return testimonials;
}

var saveFileTestimonials = function(testimonials)
{
    var data = JSON.stringify(testimonials);
    fs.writeFileSync(testimonialsFilePath, data, 'utf8');
}

var getTestimonials = function()
{
    var testimonials = loadFileTestimonials();

    return testimonials;
}

var saveTestimony = function(newTestimony)
{
    var testimonials = loadFileTestimonials();
    testimonials.push(newTestimony);
    saveFileTestimonials(testimonials);
}

// Exportar a função no module...
module.exports = 
{// Referencia fora : nome do arquivo interno
    getTestimonials: getTestimonials,
    saveTestimony: saveTestimony
}