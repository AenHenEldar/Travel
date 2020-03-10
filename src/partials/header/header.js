$(document).ready(function () {

    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__item').click(function (e) {
        if (e.target.nodeName == 'INPUT') {
            // resetting previous data
            if ($('.header__item .field').css('height') != '40px') {
                $('.header__item:first-child').css('display', 'inline-block');
            }
            // resetting previous data
            for (let i = 1; i <= $('.header__item').length; i++) {
                if (($(this).index() + 1) != i) {
                    $(`.header__item:nth-child(${i})`).find('.arrow-top').toggleClass('arrow-top arrow-down');
                    $(`.header__item:nth-child(${i})`).find('.header__container').removeClass('active');
                    $(`.header__item:nth-child(${i})`).removeClass('active');
                }
            }

            $(this).find('.arrow-down, .arrow-top').toggleClass('arrow-top arrow-down');
            $(this).find('.header__container').toggleClass('active');
            $(this).toggleClass('active');


            if ($('.header__item .field').css('height') != '40px') {
                // if this is second item, then first item display = none
                if (($(this).index() + 1) == 2 && $(this).hasClass('active')) {
                    $('.header__item:first-child').css('display', 'none');
                }
            }

        }

    });

    $('.header__contries p').click(function () {
        $(this).next().toggleClass('active');
    });

})