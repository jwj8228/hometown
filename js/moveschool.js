// 展示一
(function () {
	var $content = $("#content"),
		$presentation1 = $(".presentation1");
	gainHeight();
	$(window).resize(function () {
		gainHeight();
	})

	function gainHeight() {
		var windH = $(window).height(),
			h = windH - parseFloat($content.css("margin"));
		$presentation1.height(h)
	}
}());
//展示三
(function () {
	var $presentation3 = $("#content .presentation3")
	$view = $presentation3.find(".view"),
		$viewLi = $view.find("li"),
		$item = $presentation3.find(".item"),
		$itemLi = $item.find("li"),
		len = $itemLi.length,
		index = 0,
		timer = null;
	autoPlay();
	$item.hover(function () {
		clearInterval(timer);
	}, autoPlay);
	$view.hover(function () {
		clearInterval(timer);
	}, autoPlay);
	$itemLi.each(function () {
		$(this).mouseenter(function () {
			var i = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$viewLi.eq(i).addClass("on").siblings().removeClass("on");
			index = i;
		})
	});

	function autoPlay() {
		timer = setInterval(function () {
			index++;
			index %= len;
			$itemLi.eq(index).addClass("on").siblings().removeClass("on");
			$viewLi.eq(index).addClass("on").siblings().removeClass("on");
		}, 2000)
	}
})();
//btn定位
(function () {
	var $content = $("#content"),
		$part = $content.find(".part"),
		$btn = $("#content .btn");
	$btn.click(function () {
		var index = $btn.index($(this)),
			scrollT = $part.eq(index + 1).offset().top - ($(window).height() - $part.eq(index + 1).height() + 70) / 2;
		console.log(scrollT, index)
		$("body,html").animate({
			scrollTop: scrollT
		}, 800);
	})
})();