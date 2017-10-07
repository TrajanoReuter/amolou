$(document).ready(function() {
        $(window).scroll(function(){
             var bottomOfWindow = $(window).scrollTop() + $(window).height();
             var howWorks = $('#how-works').position().top;
             var bePart = $('#be-part').position().top;
             var contact = $('#contact').position().top;

             if(bottomOfWindow>howWorks + 80){
                $('.ef2').addClass('animated fadeInRight');
             }

             if(bottomOfWindow>bePart + 80){
                $('.ef3').addClass('animated fadeInLeft');
             }

             if(bottomOfWindow>contact + 80){
                $('.ef4').addClass('animated fadeInRight');
             }

        });
        var tam = $(window).width();
        if(tam>2560){
            $('.ef1').addClass('active');
            $('.ef2').addClass('active');
            $('.ef3').addClass('active');
            $('.ef4').addClass('active');
        }

        $(".ef1").addClass('animated fadeInLeft');

        var $doc = $('html, body');
            $('.scrollslow').click(function() {
                $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 80
            }, 750);
            return false;
        });
});