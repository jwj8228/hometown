// 展示一
(function () {

	$(window).resize(function () {
		gainHeight();
	})
	// 视差效果，获取卷入高度
	gainHeight();

	function gainHeight() {
		var windH = $(window).height(),
			h = windH - parseFloat($("#content").css("margin"));
		$(".presentation1").height(h)
	}
}());
//展示三
(function () {
	var view = $("#content .presentation3").find(".view");
	var viewLi = view.find("li");
	var item = $("#content .presentation3").find(".item");;
	var itemLi = item.find("li");
	var len = itemLi.length;
	var index = 0;
	var timer = null;
	// 鼠标悬浮到tab区域时清除定时器
	item.hover(function () {
		clearInterval(timer);
	}, autoPlay);
	view.hover(function () {
		clearInterval(timer);
	}, autoPlay);
	// 循环遍历所有的li项目移入时为它增加类名
	itemLi.each(function () {
		$(this).mouseenter(function () {
			var i = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			viewLi.eq(i).addClass("on").siblings().removeClass("on");
			index = i;
		})
	});
	// tab切换自动播放
	autoPlay();

	function autoPlay() {
		timer = setInterval(function () {
			index++;
			index %= len;
			itemLi.eq(index).addClass("on").siblings().removeClass("on");
			viewLi.eq(index).addClass("on").siblings().removeClass("on");
		}, 2000)
	}
})();
// btn定位
(function () {
	part = $("#content").find(".part"),
		$("#content .btn").click(function () {
			var index = $("#content .btn").index($(this)),
				scrollT = part.eq(index + 1).offset().top - ($(window).height() - part.eq(index + 1).height() + 70) / 2;
			console.log(scrollT, index)
			$("body,html").animate({
				scrollTop: scrollT
			}, 800);
		})
})();