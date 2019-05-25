// 内容banner
(function () {
    var num = 0;

    function banner() {
        $('.but li').eq(num).addClass('active').siblings().removeClass('active');
        $('.bg').css({
            left: -num * $('.box').width()
        });
    }

    function next() {
        num++;
        if (num > $('.but li').length - 1) {
            num = 0;
        };
        banner();
    }
    $('.right').click(next);
    $('.left').click(function () {
        num--;
        if (num < 0) {
            num = $('.but li').length - 1;
        };
        banner();
    })
    $('.but li').click(function () {
        num = $(this).index();
        banner();
    })
    var time = setInterval(next, 1500);
    // 划上清除定时器 划出启动
    $('.banner').hover(
        function () {
            clearInterval(time);
        },
        function () {
            time = setInterval(next, 1500);
        }
    );
})();
// 名师风采
(function () {
    var $ul = $('.case ul'),
        $li = $ul.children(),
        $btn = $('.case .btn'),
        width = $ul.children().eq(0).width(),
        length = $li.length,
        midIndex = Math.floor(length / 2),
        clickTime = 0,
        sumWidth = 0,
        timer;
    changeClassName();
    setTimeout(function () {
        sumWidth = $li.last()[0].offsetLeft + $li.last().width();
        $ul.css('marginLeft', -sumWidth / 2 + 'px').css('opacity', 1);
    }, 300);
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            sumWidth = $li.last()[0].offsetLeft + $li.last().width();
            $ul.animate({
                'marginLeft': -sumWidth / 2 + 'px'
            }, 300);
        }, 300);
    });
    $btn.click(function () {
        if (new Date() - clickTime > 350) {
            var index = $btn.index($(this));
            if (index) {
                midIndex++;
                midIndex %= length;
                $ul.stop().animate({
                    'marginLeft': -sumWidth / 2 - width + 'px'
                }, 300, function () {
                    $(this).css('marginLeft', -sumWidth / 2 + 'px').append($(this).children().first());
                });
            } else {
                midIndex = --midIndex < 0 ? length - 1 : midIndex--;
                $ul.stop().animate({
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
        $li.removeClass('mid slide').css("margin", "0");
        $li.eq(midIndex).addClass('mid').css("margin", "0px 0px 0px 1px");
        $li.eq(leftIndex).addClass('slide').css("marginLeft", "25px");
        $li.eq(rightIndex).addClass('slide').css("marginRight", "25px");
    }
})();