var express = require('express');
var router = express.Router();
var testimonialService = require('../Services/testimonialsService');


router.get('/', function(req, res, next)
{
    var testimonials = testimonialService.getTestimonials();

    var viewData = 
    {
        title: 'Depoimentos',
        testimonials: testimonials
    };

    res.render('testimonials', viewData);
});

module.exports = router;