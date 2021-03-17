$('.owl-carousel-1').owlCarousel({
    center: true,
    items:4,
    loop:true,
    margin:20,
    dots: true,
    responsive:{
        0:{
            items:2,
            center: true
        },  
        576:{
            items:2,
            center: true
        },
        768:{
            items:2,
            center: true
        },
        992:{
            items:2,
            center: true
        },
        1200:{
            items:4,
            center: true
        }
    }
});

$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
})
