
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    // slidesPerView: 4,
    spaceBetween: 25,

    breakpoints: {
        897: {
            slidesPerView: 4,
            centeredSlides: true,
            // spaceBetween: 56,
        },
        481: {
            slidesPerView: 3,
            centeredSlides: true,
        },
    },

});


// ハンバーガーメニュー----------------------------------
$(function () {
    $(".btn-trigger").on("click", function () {
        $(this).toggleClass("active");
        $('#slide-nav').toggleClass("active");
        $('#bg-layer').toggleClass('active');
        
        
    });
    $("#bg-layer").click(function () {
        $(this).toggleClass("active");
        $('#slide-nav').toggleClass("active");
        $('.btn-trigger').toggleClass('active');
    });
    
    // アコーディオンメニュー-------------------------------------------
    $('.open').show();
    
    $('.faq-item').click(function () {
        var $answer = $(this).find('.answer');
        // $answer.toggleClass('open');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
        }
        else {
            $answer.addClass('open');
            $answer.slideDown();
            
        }
        
        return false;
    })
    
    
    // スライダー-------------------------------------------
    
    
    
    
    
    
    AOS.init();
    
    
    
    
    
    
});

