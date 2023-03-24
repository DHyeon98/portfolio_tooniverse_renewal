
$(function() {
    $('.slide_box').slick({
        slide: 'div',
        isFinite: true,
        slideToShow: 1,
        speed: 500,
        autoplay : true,
        autoplaySpeed : 3000,
        prevArrow : $('.pre'), 
        nextArrow : $('.next'),
        dots : true,
        dotsClass : "dotS"
    })
    $('.time_slide').slick({
        slide: 'div',
        slideToShow: 1,
        speed: 1000,
        prevArrow : $('.time_pre'), 
        nextArrow : $('.time_next'),
        dots : false,
        vertical : true,
        verticalSwiping: true
    })

    $('.slide_container').slick({
        slide: 'div',
        isFinite: true,
        slideToShow: 4,
        slideToScroll:1,
        speed: 1000,
        prevArrow : $('.pre1'), 
        nextArrow : $('.next1'),
        dots : true,
        dotsClass : "dotS1",
        variableWidth: true
    })

    $('.kids_container').slick({
        slide: 'div',
        isFinite: true,
        slideToShow: 4,
        slideToScroll:1,
        speed: 1000,
        prevArrow : $('.pre2'), 
        nextArrow : $('.next2'),
        dots : true,
        dotsClass : "dotS2",
        variableWidth: true
    })

    $('.variety_container').slick({
        slide: 'div',
        isFinite: true,
        slideToShow: 4,
        slideToScroll:1,
        speed: 1000,
        prevArrow : $('.pre2_2'), 
        nextArrow : $('.next2_2'),
        dots : true,
        dotsClass : "dotS2_2",
        variableWidth: true
    })

    $('.slide_container3').slick({
        // slide: 'div',
        isFinite: true,
        slideToShow: 4,
        slideToScroll:1,
        speed: 1000,
        prevArrow : $('.pre3'), 
        nextArrow : $('.next3'),
        dots : true,
        dotsClass : "dotS3",
        variableWidth: true
    })

    $('.logo_box').slick({
        slide: 'a',
        isFinite: true,
        slideToShow: 4,
        slideToScroll:1,
        speed: 1000,
        autoplay : false,
        prevArrow : $('.pre4'), 
        nextArrow : $('.next4'),
        dots : false,
        variableWidth: true
    })

})

$(function() {
    $('.genre').fadeOut();
    $('.kids_container').fadeIn();
    $(document).on("change", "input", function(){
        if($('input[type="radio"]:checked').val() == 'kids') {
            $('.kids_container').fadeIn(1000);
        } else {
            $('.kids_container').fadeOut();
        }

        if($('input[type="radio"]:checked').val() == 'child') {
            $('.child_container').fadeIn(1000);
        } else {
            $('.child_container').fadeOut();
        }

        if($('input[type="radio"]:checked').val() == 'variety') {
            $('.variety_container').fadeIn(1000);
        } else {
            $('.variety_container').fadeOut();
        }
    });
})

