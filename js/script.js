// Owl Script Here 
$(document).ready(function () {
    $('#first .owl-carousel').owlCarousel({
        items: 5, // This Is The Number of Items You Want To show
        margin: 20, // This Is The Gap Which You Want To Shows
        loop: true, // Behaves As A Loop As The Default is False We Need To Change
        nav: true, // It Will Show THe arrows 
        autoplay: true, // Playing The Carousel Automatically
        autoplayTimeout: 2000, // At What Time You Need The Carousel To scroll Automatically
       
        // This Is For The Animation Only Occurs For Single Data
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order

                
        responsive: {
            0: {
                items:1,
                nav : false,
                margin : 0,
                dots:false
            },
            600 : {
                items : 3,
                nav : false,
                margin : 5,
            },
            1000 : {
                items : 3,
                nav : false,
                // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
            },
        }
    })
});



// Second Carousel

// Owl Script Here 
$(document).ready(function () {
    $('#customer-1 .owl-carousel').owlCarousel({
        items: 5, // This Is The Number of Items You Want To show
        margin: 20, // This Is The Gap Which You Want To Shows
        loop: true, // Behaves As A Loop As The Default is False We Need To Change
        nav: true, // It Will Show THe arrows 
        autoplay: true, // Playing The Carousel Automatically
        autoplayTimeout: 2000, // At What Time You Need The Carousel To scroll Automatically
       
        // // This Is For The Animation Only Occurs For Single Data
        // animateOut: 'slideOutDown',
        // animateIn: 'pulse',
        // rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order
        dots : false,
     
        responsive: {
            0: {
                items:5,
                nav : false,
                margin : 0,
            },
            600 : {
                items : 5,
                nav : false,
                margin : 5,
            },
            1000 : {
                items : 5,
                nav : false,
                // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
            },
        }
    })
});




//  Hindi Page Carousel

$(document).ready(function () {
    $('#myCarousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots : false,
        autoplay : 3000,
        autoplayTimeout : 2000,
        // // This Is For The Animation Only Occurs For Single Data
        animateOut: 'slideOutDown',
        animateIn: 'backInDown',
        rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});







// Ram Carousel

$(document).ready(function () {
    $('#Ram .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots : false,
        autoplay : 7000,
        autoplayTimeout : 3000,
        // // This Is For The Animation Only Occurs For Single Data
        animateOut: 'slideOutDown',
        animateIn: 'zoomInDown',
        rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order
        // stagePadding : 100,

        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});





// Job Less Carousel, atkbd carousel,science & invention carousel and game Carousel


$(document).ready(function(){
    $('#jobcarousel .owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        dots : false,
        autoplay : 5000,
        autoplayTimeout : 2000,
        animateOut: 'slideOutDown',
        animateIn: 'zoomInDown',
        rtl:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
})





// RoadMap Carousel

// Owl Script Here 
$(document).ready(function () {
    $('#Road .owl-carousel').owlCarousel({
        items: 1, // This Is The Number of Items You Want To show
        margin: 20, // This Is The Gap Which You Want To Shows
        loop: true, // Behaves As A Loop As The Default is False We Need To Change
        nav: true, // It Will Show THe arrows 
        autoplay: true, // Playing The Carousel Automatically
        autoplayTimeout: 4000, // At What Time You Need The Carousel To scroll Automatically
        dots:false,
        nav : false,

        // This Is For The Animation Only Occurs For Single Data
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order

                
        responsive: {
            0: {
                margin : 0,
            },
            600 : {
                margin : 5,
            },
            1000 : {
                // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
            },
        }
    })
});

