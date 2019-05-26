// 内容banner
(function () {
    bannerUl = $(".banner").find("ul"),
        bannerLi = bannerUl.find("li"),
        tab = $(".banner").find("span"),
        len = bannerLi.length,
        timer = null,
        index = 0;
    bannerLi.eq(index).stop().fadeIn().siblings().stop().fadeOut();
    autoPlay();

    function autoPlay() {
        timer = setInterval(function () {
            index++;
            index = index > len - 1 ? 0 : index;
            bannerLi.eq(index).stop().fadeIn().siblings().stop().fadeOut();
            tab.eq(index).addClass("on").siblings().removeClass("on");
        }, 3000);
    }
    tab.each(function () {
        $(this).click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            index = $(this).index();
            bannerLi.eq(index).stop().fadeIn().siblings().stop().fadeOut();
        })
    })
    $(".banner").hover(function () {
        clearInterval(timer);
    }, autoPlay)
})();
// 名师风采
(function () {
    li = $('.case ul').children(),
        width = $('.case ul').children().eq(0).width(),
        length = li.length,
        midIndex = Math.floor(length / 2),
        clickTime = 0,
        sumWidth = 0,
        timer;
    changeClassName();
    setTimeout(function () {
        sumWidth = li.last()[0].offsetLeft + li.last().width();
        $('.case ul').css('marginLeft', -sumWidth / 2 + 'px').css('opacity', 1);
    }, 300);
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            sumWidth = li.last()[0].offsetLeft + li.last().width();
            $('.case ul').animate({
                'marginLeft': -sumWidth / 2 + 'px'
            }, 300);
        }, 300);
    });
    $('.case .btn').click(function () {
        if (new Date() - clickTime > 350) {
            var index = $('.case .btn').index($(this));
            if (index) {
                midIndex++;
                midIndex %= length;
                $('.case ul').stop().animate({
                    'marginLeft': -sumWidth / 2 - width + 'px'
                }, 300, function () {
                    $(this).css('marginLeft', -sumWidth / 2 + 'px').append($(this).children().first());
                });
            } else {
                midIndex = --midIndex < 0 ? length - 1 : midIndex--;
                $('.case ul').stop().animate({
                    'marginLeft': -sumWidth / 2 + width + 'px'
                }, 300, function () {
                    $(this).css('marginLeft', -sumWidth / 2 + 'px').prepend($(this).children().last());
                });
            }
            changeClassName();
            clickTime = new Date();
        }
    });

    function changeClassName() {
        var leftIndex = midIndex - 1 < 0 ? length - 1 : midIndex - 1,
            rightIndex = midIndex + 1 >= length ? 0 : midIndex + 1;
        li.removeClass('mid slide').css("margin", "0");
        li.eq(midIndex).addClass('mid').css("margin", "0px 0px 0px 1px");
        li.eq(leftIndex).addClass('slide').css("marginLeft", "25px");
        li.eq(rightIndex).addClass('slide').css("marginRight", "25px");
    }
})();