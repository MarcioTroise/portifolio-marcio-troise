var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10, 
    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        },
        950:{
            items:4
        },
        1300:{
            items:5
        },
        1500:{
            items:7
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});