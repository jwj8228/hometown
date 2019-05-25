// 头部导航栏二级菜单
(function(){
	var $more = $("#header .more");
	$more.click(function(){
		$(this).find(".nav-second").toggle();
    })
})();