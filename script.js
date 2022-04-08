$.getScript( "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function(data, textStatus, jqxhr) {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin: 10,
        nav:true,
        responsive:{
            0:{
                items:1,
                center: true,
                stagePadding: 45
            },
            700:{
                items: 2,
                center: false
            },
            1000:{
                items:3
            },
            1200: {
                items: 4
            },
            1450:{
                items:5
            },
        }
    })
});